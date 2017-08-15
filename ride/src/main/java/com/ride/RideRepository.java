package com.ride;

import com.ride.model.Ride;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Arun on 25/6/17.
 */
public interface RideRepository extends JpaRepository<Ride, Long>{
}
