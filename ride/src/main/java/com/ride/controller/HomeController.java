package com.ride.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Arun on 25/6/17.
 */
@RestController
public class HomeController {

    @RequestMapping("/")
    public String welcome(){
        return "Welcome to the Ride Booking app";
    }
}
