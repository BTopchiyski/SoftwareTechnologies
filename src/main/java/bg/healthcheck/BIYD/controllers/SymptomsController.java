package bg.healthcheck.BIYD.controllers;

import bg.healthcheck.BIYD.entities.Symptoms;
import bg.healthcheck.BIYD.repositories.SymptomsRepository;
import javassist.compiler.SymbolTable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/app/symptoms")
public class SymptomsController {

    @Autowired
    private SymptomsRepository symptomsRepository;

    public SymptomsController(SymptomsRepository symptomsRepository) {
        this.symptomsRepository = symptomsRepository;
    }

    @GetMapping("/bodypart")
    public List<Symptoms> getAllSymptoms(@RequestParam Integer bodyPart_id) {
        return symptomsRepository.findAllSymptomsByBodyPartID(bodyPart_id);
    }
}
