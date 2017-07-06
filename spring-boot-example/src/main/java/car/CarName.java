package car;

/**
 * Created by 435694 on 6/22/2017.
 */
public enum CarName {
    BMW(BMWCar.class), FERRARI(FerrariCar.class), BENZ(BenzCar.class), AUDI(AudiCar.class);
    private Class<? extends Car> carType;

    private CarName(Class<? extends Car> carType){
        this.carType = carType;
    }

    public Class<? extends Car> getCarType(){
        return carType;
    }
}
