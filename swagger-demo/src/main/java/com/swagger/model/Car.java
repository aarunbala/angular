package com.swagger.model;


public class Car{
    String make;
    String model;
    public Car(String make, String model) {
        this.make = make;
        this.model = model;
    }

    public Car() {
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }
}
