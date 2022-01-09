package bg.healthcheck.BIYD.repositories;

import bg.healthcheck.BIYD.entities.BodyParts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BodyPartsRepository extends JpaRepository<BodyParts,Long> {

    @Query("SELECT bp FROM BodyParts bp WHERE bp.name = :bodyPart")
    BodyParts getIdByBodyPartName(String bodyPart);

}
