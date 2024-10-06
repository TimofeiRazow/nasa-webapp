package org.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DPage {
    @GetMapping("/about_app")
    public String home() {
        return "about_web.html";
    }
}
