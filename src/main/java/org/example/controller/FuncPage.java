package org.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FuncPage {
    @GetMapping("/about_func")
    public String home() {
        return "functions.html";
    }
}
