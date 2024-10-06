const zoomSpeed = 3; // Скорость зума
const minZoom = 15; // Минимальное расстояние
const maxZoom = 150; // Максимальное расстояние
let clock = 0;
let globalSpeedFactor = 1.0;
const element=document.getElementById("desc");
// Сцена, камера и рендерер
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, element.offsetWidth / element.offsetHeight, 0.1, 1000);
camera.position.z = 90;
let radius = camera.position.distanceTo(new THREE.Vector3(0, 0, 0)); // Радиус перемещения камеры
const renderer = new THREE.WebGLRenderer();

renderer.setSize(element.offsetWidth,element.offsetHeight);
document.getElementById("desc").appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();

const texture_earth = loader.load('static/texture.png');
const texture_moon = loader.load('static/moon.jpg');
const texture_space = loader.load('static/spacec.jpg');

function set_tex_scene(texture_space) {
  scene.background = texture_space;
}

set_tex_scene(texture_space);

// Центральный объект
const geometry = new THREE.SphereGeometry(6.3, 32, 32);
const material = new THREE.MeshBasicMaterial({ map: texture_earth });
const centralSphere = new THREE.Mesh(geometry, material);
centralSphere.name = 'Earth'; // Установим имя объекта
scene.add(centralSphere);
centralSphere.rotation.x = 0.01;

// Элемент для отображения подписи
const label = document.createElement('div');
label.style.position = 'absolute';
label.style.color = 'white';
label.style.padding = '5px';
label.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
label.style.display = 'none';
document.body.appendChild(label);

// Raycaster и отслеживание мыши
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Событие для отслеживания положения мыши
window.addEventListener('mousemove', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / (window.innerHeight - 100)) * 2 + 1;
});

// Функция для проверки пересечения луча с объектами
function checkIntersections() {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
    const object = intersects[0].object;
    label.style.display = 'block';
    label.innerHTML = object.name;  // Подпись объекта
    label.style.left = `${event.clientX + 10}px`;
    label.style.top = `${event.clientY + 10}px`;
  } else {
    label.style.display = 'none';  // Скрываем подпись, если не наводим на объект
  }
}

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / (window.innerHeight - 100);
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight - 100);
}

// Обработчик для изменения зума при нажатии W и S
window.addEventListener('keydown', function (event) {
  if (event.key === 'w' || event.key === 'W') {
    radius = Math.max(minZoom, radius - zoomSpeed); // Приближение
    updateCameraPosition();  // Обновляем позицию камеры на основе нового радиуса
  } else if (event.key === 's' || event.key === 'S') {
    radius = Math.min(maxZoom, radius + zoomSpeed); // Отдаление
    updateCameraPosition();  // Обновляем позицию камеры на основе нового радиуса
  }
});

// Функция для поворота точки на орбите относительно оси X на угол наклона
function applyInclination(vector, inclination) {
  const cosIncl = Math.cos(inclination);
  const sinIncl = Math.sin(inclination);

  const y = vector.y * cosIncl - vector.z * sinIncl;
  const z = vector.y * sinIncl + vector.z * cosIncl;

  return new THREE.Vector3(vector.x, y, z);
}

// Функция для расчета орбиты спутника
function propagate(clock, e, a, inclination) {
  const T = 120; // Период (в секундах)
  const n = 2 * Math.PI / T;
  const tau = 0;

  const M = n * (clock - tau);
  const E = keplerSolve(e, M);
  const cose = Math.cos(E);

  const r = a * (1 - e * cose);
  const sX = r * ((cose - e) / (1 - e * cose));
  const sY = r * ((Math.sqrt(1 - e * e) * Math.sin(E)) / (1 - e * cose));
  const sZ = 0;

  let position = new THREE.Vector3(sX, sY, sZ);

  // Применяем наклон орбиты
  position = applyInclination(position, inclination);

  return position;
}

function keplerSolve(e, M) {
  const tol = 1.0e-14;
  const Mnorm = M % (2 * Math.PI);
  let E0 = Mnorm;
  let dE = tol + 1;

  while (dE > tol) {
    const E = E0 - (E0 - e * Math.sin(E0) - Mnorm) / (1 - e * Math.cos(E0));
    dE = Math.abs(E - E0);
    E0 = E;
  }

  return E0;
}

// Функция для добавления спутника
function addSatellite({
  size, textureUrl, eccentricity, semiMajorAxis, inclination, orbitSteps, orbitPeriod, name
}) {
  const loader = new THREE.TextureLoader();
  const texture = loader.load(textureUrl);

  const geometry = new THREE.SphereGeometry(size, 32, 32);
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const satellite = new THREE.Mesh(geometry, material);
  satellite.name = name; // Устанавливаем имя для спутника
  scene.add(satellite);

  const points = [];
  for (let clock = 0; clock < orbitSteps; clock++) {
    const loc = propagate(clock, eccentricity, semiMajorAxis, inclination);
    points.push(loc);
  }

  const orbitGeometry = new THREE.BufferGeometry().setFromPoints(points);
  const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
  const orbitLine = new THREE.Line(orbitGeometry, orbitMaterial);
  scene.add(orbitLine);

  const orbitSpeed = (2 * Math.PI) / orbitPeriod;
  let orbitClock = 0;

  function animateSatellite() {
    if (orbitClock < orbitSteps) {
      const loc = propagate(orbitClock, eccentricity, semiMajorAxis, inclination);
      satellite.position.set(loc.x, loc.y, loc.z);
      orbitClock += orbitSpeed * globalSpeedFactor;
    } else {
      orbitClock = 0;
    }
  }

  return animateSatellite;
}

// Используем функцию для добавления спутников
const animateSatellite1 = addSatellite({
  size: 1.5,
  textureUrl: 'static/moon.jpg',
  eccentricity: 0.0549,
  semiMajorAxis: 38,
  inclination: 5.1 * (Math.PI / 180),
  orbitSteps: 121,
  orbitPeriod: 696,
  name: 'Moon'
});

const animateSatellite2 = addSatellite({
  size: 1,
  textureUrl: 'static/moon2.jpg',
  eccentricity: 0.0007303,
  semiMajorAxis: 6.738,
  inclination: 51.6 * (Math.PI / 180),
  orbitSteps: 121,
  orbitPeriod: 1.5,
  name: ''
});

// Управление камерой
let isMouseDown = false;
let mouseX = 0;
let mouseY = 0;
let cameraTheta = Math.PI / 2;
let cameraPhi = Math.PI / 2;

window.addEventListener('mousedown', function (event) {
  if (event.button === 0) {  // Левый клик мыши
    isMouseDown = true;
    mouseX = event.clientX;
    mouseY = event.clientY;
  }
});

window.addEventListener('mouseup', function (event) {
  if (event.button === 0) {  // Левый клик мыши
    isMouseDown = false;
  }
});

window.addEventListener('mousemove', function (event) {
  if (isMouseDown) {
    const deltaX = event.clientX - mouseX;
    const deltaY = event.clientY - mouseY;

    cameraTheta -= deltaX * 0.01;
    cameraPhi += deltaY * 0.01;  // Инвертируем вращение по оси X

    cameraPhi = Math.max(0.1, Math.min(Math.PI - 0.1, cameraPhi));

    mouseX = event.clientX;
    mouseY = event.clientY;

    updateCameraPosition();
  }
  checkIntersections(); // Проверяем пересечения лучей при движении мыши
});

window.addEventListener('contextmenu', function (event) {
  event.preventDefault();
});

function updateCameraPosition() {
  const x = radius * Math.sin(cameraPhi) * Math.cos(cameraTheta);
  const y = radius * Math.cos(cameraPhi);
  const z = radius * Math.sin(cameraPhi) * Math.sin(cameraTheta);

  camera.position.set(-x, -y, z);
  camera.lookAt(centralSphere.position);
}

// Функция для обновления глобального коэффициента скорости через ползунок
function updateSpeed(value) {
  globalSpeedFactor = parseFloat(value);
  document.getElementById('speedValue').textContent = value;
}

// Основная функция анимации
function animate() {
  requestAnimationFrame(animate);

  centralSphere.rotation.y += globalSpeedFactor * (1 / 100);

  animateSatellite1();
  animateSatellite2();

  renderer.render(scene, camera);
}

animate();
