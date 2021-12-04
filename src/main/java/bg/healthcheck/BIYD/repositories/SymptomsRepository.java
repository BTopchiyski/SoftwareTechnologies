package bg.healthcheck.BIYD.repositories;

import bg.healthcheck.BIYD.entities.Symptoms;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SymptomsRepository extends JpaRepository<Symptoms,Long> {
}
