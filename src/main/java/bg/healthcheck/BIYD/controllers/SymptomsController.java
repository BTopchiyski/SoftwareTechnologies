package bg.healthcheck.BIYD.controllers;

import bg.healthcheck.BIYD.Services.IllnessService;
import bg.healthcheck.BIYD.entities.BodyParts;
import bg.healthcheck.BIYD.entities.Illnesses;
import bg.healthcheck.BIYD.entities.BodyParts;
import bg.healthcheck.BIYD.entities.Symptoms;
import bg.healthcheck.BIYD.repositories.BodyPartsRepository;
import bg.healthcheck.BIYD.repositories.SymptomsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
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

    @Autowired
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
            Symptoms currentSymptom = symptomsRepository.findAllByName(symptom_names.get(i));
            if (currentSymptom != null) {
                Integer currentId = Integer.parseInt(currentSymptom.getId().toString());
                symptomsList.add(currentId);
            }
        }
        return illnessService.findAllIllnessesBySymptomIds(symptomsList);
    }
}
