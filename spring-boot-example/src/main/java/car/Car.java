package car;

/**
 * Created by 435694 on 6/22/2017.
 */
public interface Car {
    default void print(){
        System.out.println("I'm a Four wheeler");
    }
}
