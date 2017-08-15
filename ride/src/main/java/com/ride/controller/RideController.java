package com.ride.controller;

import com.ride.RideRepository;
import com.ride.model.Location;
import com.ride.model.Ride;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

/**
 * Created by Arun on 25/6/17.
 */
@RestController
public class RideController {

    @Autowired
    private RideRepository rideRepository;

    @RequestMapping("/rides")
    public List<Ride> getRides(){
        Location source = new Location(1L,12.34,34.566,new Date());
        Location destination = new Location(2L,17.34,39.566,new Date());
        Ride ride1 = new Ride(1L, source, destination,"Arun",403320735L, new Date());
        Ride ride2 = new Ride(2L, source, destination,"Arun",403320735L, new Date());
        rideRepository.saveAndFlush(ride1);rideRepository.saveAndFlush(ride2);

        return rideRepository.findAll();
    }
}
