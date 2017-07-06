package com.swagger.controller;

import com.swagger.model.Car;
import io.swagger.annotations.*;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import java.lang.invoke.MethodType;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by 435694 on 7/6/2017.
 */
@RestController
@Api(value="Name", produces = "application/json")
@RequestMapping("/v1")
public class HelloController {
    private static List<Car> cars = new ArrayList<Car>();

    public HelloController() {
        this.cars.add(new Car("Ford", "F50"));
        this.cars.add(new Car("Hyundai","i20"));
    }

    /*@GET
    @RequestMapping("/name")
    @ApiOperation(value="name", response = String.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Hello resource found"),
            @ApiResponse(code = 404, message = "Hello resource not found")
    })
    public String getString(@ApiParam String name){
        return new String("Hello " + name);
    }*/
    @GET
    @RequestMapping(value="/cars")
    @ApiOperation(value="cars", response = List.class, httpMethod = "GET")
    public List<Car> getCars(){
        return this.cars;
    }

    @POST
    @RequestMapping(value="/cars/add/{car}")
    @ApiOperation(value="addCar", response = Car.class, httpMethod = "POST")
    public Car putCar(@PathVariable @ApiParam String car){
        Car carObj = new Car(car, "1400");
        this.cars.add(carObj);
        return carObj;
    }

    @DELETE
    @RequestMapping("/cars/remove/{carName}")
    @ApiOperation(value="deleteCar", response = Car.class, httpMethod = "DELETE")
    public Car deleteCar(@PathVariable @ApiParam String carName){
        for (Car car:this.cars) {
            if(car.getMake().equals(carName)){
                this.cars.remove(car);
                return car;
            }
        }
        return null;
    }
}
