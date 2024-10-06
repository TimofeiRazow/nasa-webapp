package org.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LinksPage {
    @GetMapping("/links")
    public String home() {
        return "d_l.html";
    }
}