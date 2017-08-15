package com.ride.model;

import javax.persistence.*;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import java.util.Date;

/**
 * Created by Arun on 25/6/17.
 */
@Entity
public class Ride {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @OneToOne(cascade = CascadeType.ALL)
    private Location source;
    @OneToOne(cascade = CascadeType.ALL)
    private Location destination;
    private String name;
    private Long mobile;
    private Date bookingDate;

    public Ride() {
    }

    public Ride(Long id, Location source, Location destination, String name, Long mobile, Date bookingDate) {

        this.id = id;
        this.source = source;
        this.destination = destination;
        this.name = name;
        this.mobile = mobile;
        this.bookingDate = bookingDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getMobile() {
        return mobile;
    }

    public void setMobile(Long mobile) {
        this.mobile = mobile;
    }

    public Date getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(Date bookingDate) {
        this.bookingDate = bookingDate;
    }

    public Location getSource() {
        return source;
    }

    public void setSource(Location source) {
        this.source = source;
    }

    public Location getDestination() {
        return destination;
    }

    public void setDestination(Location destination) {
        this.destination = destination;
    }
}
