package bg.healthcheck.BIYD.controllers;

import bg.healthcheck.BIYD.services.IllnessService;
import bg.healthcheck.BIYD.entities.BodyParts;
import bg.healthcheck.BIYD.entities.Illnesses;
import bg.healthcheck.BIYD.entities.Symptoms;
import bg.healthcheck.BIYD.repositories.BodyPartsRepository;
import bg.healthcheck.BIYD.repositories.SymptomsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/app/symptoms")
public class SymptomsController {

    @Autowired
    private SymptomsRepository symptomsRepository;
    private BodyPartsRepository bodyPartsRepository;
    private IllnessService illnessService;


    public SymptomsController(SymptomsRepository symptomsRepository, IllnessService illnessService, BodyPartsRepository bodyPartsRepository) {
        this.symptomsRepository = symptomsRepository;
        this.bodyPartsRepository = bodyPartsRepository;
        this.illnessService = illnessService;
    }

    @GetMapping("/bodypart")
    public List<Symptoms> getAllSymptoms(@RequestParam String bodyPartName) {
        BodyParts bodyPart = bodyPartsRepository.getIdByBodyPartName(bodyPartName);
        Long bodyPartId = Long.valueOf(bodyPart.getId());
        return symptomsRepository.findAllSymptomsByBodyPartID(bodyPartId);
    }

    @GetMapping("/getsymptoms")
    public List<Illnesses> getAllSymptomIds(@RequestParam List<String> symptom_names) {
        List<Integer> symptomsList = new ArrayList<>();
        for (int i = 0; i < symptom_names.size(); i++) {
            String symptomName = symptom_names.get(i);
            Symptoms currentSymptom = symptomsRepository.findAllByName(symptomName);
            if (currentSymptom != null) {
                Integer currentId = Integer.parseInt(currentSymptom.getId().toString());
                symptomsList.add(currentId);
            }
        }
        return illnessService.findAllIllnessesBySymptomIds(symptomsList);
    }

    @GetMapping("/all")
    public List<Symptoms> getAllBodyParts() {
        return symptomsRepository.findAll();
    }

    @PostMapping("/addsymptom")
    public ResponseEntity addSymptom(@RequestBody Symptoms symptom) {

        if (symptom == null) {
            return new ResponseEntity<>("Error: symptom is empty.", HttpStatus.BAD_REQUEST);
        }
        try {
            symptomsRepository.save(symptom);
        } catch (DataIntegrityViolationException | IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Symptom successfully added!", HttpStatus.OK);
    }
}
