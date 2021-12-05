package bg.healthcheck.BIYD.repositories;

import bg.healthcheck.BIYD.entities.Symptoms;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;
import java.util.List;

@Repository
public interface SymptomsRepository extends JpaRepository<Symptoms,Long> {

    @Query("SELECT s FROM Symptoms s WHERE s.body_part = :bodyPartId")
    List<Symptoms> findAllSymptomsByBodyPartID(Integer bodyPartId);
}
