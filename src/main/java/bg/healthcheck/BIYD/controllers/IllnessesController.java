package bg.healthcheck.BIYD.controllers;

import bg.healthcheck.BIYD.Services.IllnessService;
import bg.healthcheck.BIYD.entities.Illnesses;
import bg.healthcheck.BIYD.repositories.IllnessesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/app/illnesses")
public class IllnessesController {

    @Autowired
    private IllnessesRepository illnessesRepository;
    private IllnessService illnessService;

    public IllnessesController(IllnessesRepository illnessesRepository, IllnessService illnessService) {
        this.illnessesRepository = illnessesRepository;
        this.illnessService = illnessService;
    }

    @GetMapping("/all")
    public List<Illnesses> getIllnesses() {
        return illnessService.getIllnesses();
    }
}
