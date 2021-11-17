package bg.healthcheck.BIYD;

import bg.healthcheck.BIYD.Entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*" , maxAge = 3600)
@RestController
@RequestMapping("/app")
public class TestUserController {
    @Autowired
    TestUserRepo usersRepository;

    @GetMapping(value="/user")
    public List<User> getUsers(){
        return  usersRepository.findAll();
    }
}
