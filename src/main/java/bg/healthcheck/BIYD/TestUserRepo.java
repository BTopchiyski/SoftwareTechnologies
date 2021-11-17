package bg.healthcheck.BIYD;

import bg.healthcheck.BIYD.Entities.User;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TestUserRepo extends JpaRepository<User,Long> {
    @Query("SELECT u FROM User u WHERE (u.id)= :id")
    User findUsersById(Long id);
}
