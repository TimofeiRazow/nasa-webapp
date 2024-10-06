package org.example;

import jakarta.annotation.PostConstruct;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.io.IOException;

@SpringBootApplication
public class Main {
    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }

    @PostConstruct
    public void openBrowser() {
        String url = "http://localhost:8080/home";
        Runtime runtime = Runtime.getRuntime();
        try {
            // Открытие браузера в Windows
            runtime.exec("rundll32 url.dll,FileProtocolHandler " + url);

            // Открытие браузера в MacOS
            runtime.exec("open " + url);

            // Открытие браузера в Linux
            runtime.exec("xdg-open " + url);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
