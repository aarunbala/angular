package car;

import javax.inject.Qualifier;

/**
 * Created by 435694 on 6/22/2017.
 */
@CarMake(CarName.BMW)
public class BMWCar implements Car{
    public void print(){
        Car.super.print();
        System.out.println("Im a BMW");
    }
}
