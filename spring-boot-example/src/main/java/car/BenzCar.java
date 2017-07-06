package car;

/**
 * Created by 435694 on 6/22/2017.
 */
@CarMake(CarName.BENZ)
public class BenzCar implements Car {
    public void print(){
        Car.super.print();
        System.out.println("Im a Benz");
    }
}
