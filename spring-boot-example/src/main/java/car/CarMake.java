package car;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.METHOD;
import static java.lang.annotation.ElementType.TYPE;
import static java.lang.annotation.ElementType.PARAMETER;
import static java.lang.annotation.ElementType.FIELD;


/**
 * Created by 435694 on 6/22/2017.
 */
@Retention(RetentionPolicy.RUNTIME)
@Target({METHOD, FIELD, TYPE, PARAMETER})
public @interface CarMake {
    CarName value();
}

