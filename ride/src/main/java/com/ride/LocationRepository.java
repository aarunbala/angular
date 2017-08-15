package com.ride;

import com.ride.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Arun on 1/7/17.
 */
public interface LocationRepository extends JpaRepository<Location, Long> {
}
