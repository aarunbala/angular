package car;


import javax.enterprise.inject.Any;
import javax.enterprise.inject.Instance;
import javax.enterprise.inject.Produces;
import javax.enterprise.inject.spi.Annotated;
import javax.enterprise.inject.spi.InjectionPoint;

/**
 * Created by 435694 on 6/22/2017.
 */
public class CarFactory {
    @Produces
    @CarProducer
    public Car createCar(@Any Instance<Car> instance, InjectionPoint injectionPoint){
        Annotated annotated = injectionPoint.getAnnotated();
        CarMake carMake = annotated.getAnnotation(CarMake.class);
        Class<? extends Car> carType = carMake.value().getCarType();
        System.out.println("Car Creation : "+ carType);
        return instance.select(carType).get();
    }
}
