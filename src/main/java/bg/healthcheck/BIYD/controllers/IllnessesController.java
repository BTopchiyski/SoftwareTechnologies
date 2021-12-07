package bg.healthcheck.BIYD.controllers;

import bg.healthcheck.BIYD.repositories.IllnessesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/app/illnesses")
public class IllnessesController {

    @Autowired
    private IllnessesRepository illnessesRepository;

    public IllnessesController(IllnessesRepository illnessesRepository) {
        this.illnessesRepository = illnessesRepository;
    }

}
