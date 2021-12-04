package bg.healthcheck.BIYD.repositories;

import bg.healthcheck.BIYD.entities.Illnesses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IllnessesRepository extends JpaRepository<Illnesses,Long> {
}
