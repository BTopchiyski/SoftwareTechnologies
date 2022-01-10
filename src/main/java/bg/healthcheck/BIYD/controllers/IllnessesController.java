package bg.healthcheck.BIYD.controllers;

import bg.healthcheck.BIYD.entities.Symptoms;
import bg.healthcheck.BIYD.services.IllnessService;
import bg.healthcheck.BIYD.entities.Illnesses;
import bg.healthcheck.BIYD.repositories.IllnessesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/getGroupedIllnes")
    public List<Illnesses> getSymptomsGroupedByEqualsSymptomCount() {
        return illnessService.getSymptomsGroupedByEqualsSymptomCount();
    }

    @PostMapping("/addIllness")
    public ResponseEntity addSymptom(@RequestBody Illnesses illness){
        if (illness == null) {
            return new ResponseEntity<>("Error: illness is empty.", HttpStatus.BAD_REQUEST);
        }
        try {
            illnessService.addIllness(illness);
        } catch (DataIntegrityViolationException | IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Illness successfully added!", HttpStatus.OK);
    }
}
