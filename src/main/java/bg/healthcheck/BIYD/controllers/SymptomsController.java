package bg.healthcheck.BIYD.controllers;

import bg.healthcheck.BIYD.Services.IllnessService;
import bg.healthcheck.BIYD.entities.Illnesses;
import bg.healthcheck.BIYD.entities.Symptoms;
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
    private IllnessService illnessService;

    public SymptomsController(SymptomsRepository symptomsRepository, IllnessService illnessService) {
        this.symptomsRepository = symptomsRepository;
        this.illnessService = illnessService;
    }

    @GetMapping("/bodypart")
    public List<Symptoms> getAllSymptoms(@RequestParam Integer bodyPart_id) {
        return symptomsRepository.findAllSymptomsByBodyPartID(bodyPart_id);
    }

    @GetMapping("/getsymptoms")
    public List<Illnesses> getAllSymptomIds(@RequestParam List<String> symptom_names) {
        //get symptoms from symtpom names list
        //call illnessService method to return all illnesses that contain given
        //symptoms. Sort by most symptoms occurances
        List<Symptoms> symptomsList = new ArrayList<>();
        for(int i = 0; i < symptom_names.size(); i++){
            if(symptomsRepository.findAllByName(symptom_names.get(i)) != null){
                symptomsList.add(symptomsRepository.findAllByName(symptom_names.get(i)));
            }
        }
        return illnessService.findAllIllnessesBySymptomIds(symptomsList);
    }
}
