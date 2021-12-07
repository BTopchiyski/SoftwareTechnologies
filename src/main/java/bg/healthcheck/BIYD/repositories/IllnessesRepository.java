package bg.healthcheck.BIYD.repositories;

import bg.healthcheck.BIYD.entities.Illnesses;
import bg.healthcheck.BIYD.entities.Symptoms;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IllnessesRepository extends JpaRepository<Illnesses,Long> {

    @Query("SELECT i FROM Illnesses i join i.symptoms s WHERE s.id = :symptomId")
    List<Illnesses> findIllnessesBySimptomId(Long symptomId);
}
