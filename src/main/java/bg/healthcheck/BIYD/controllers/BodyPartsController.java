package bg.healthcheck.BIYD.controllers;

import bg.healthcheck.BIYD.entities.BodyParts;
import bg.healthcheck.BIYD.repositories.BodyPartsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/app/bodyparts")
public class BodyPartsController {

    @Autowired
    private BodyPartsRepository bodyPartsRepository;

    public BodyPartsController(BodyPartsRepository bodyPartsRepository) {
        this.bodyPartsRepository = bodyPartsRepository;
    }

    @GetMapping("/part")
    public BodyParts getAllSymptoms(@RequestParam String bodyPart) {
        return bodyPartsRepository.getIdByBodyPartName(bodyPart);
    }

    @GetMapping("/partId")
    public Long getBodyPartId(@RequestParam String bodyPart) {
        return bodyPartsRepository.getIdByBodyPartName(bodyPart).getId();
    }

    @GetMapping("/all")
    public List<BodyParts> getAllBodyParts() {
        return bodyPartsRepository.findAll();
    }

}
