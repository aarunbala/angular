package com.ride.model;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Arun on 27/6/17.
 */
@Entity
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Double latitude;
    private Double longitude;
    private Date locationDate;

    public Location(){}

    public Location(Long id, Double latitude, Double longitude, Date locationDate) {
        this.id = id;
        this.latitude = latitude;
        this.longitude = longitude;
        this.locationDate = locationDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public Date getLocationDate() {
        return locationDate;
    }

    public void setLocationDate(Date locationDate) {
        this.locationDate = locationDate;
    }
}
