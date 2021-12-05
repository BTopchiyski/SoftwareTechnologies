package bg.healthcheck.BIYD.Services;

import bg.healthcheck.BIYD.entities.Illnesses;
import bg.healthcheck.BIYD.entities.Symptoms;
import bg.healthcheck.BIYD.repositories.IllnessesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class IllnessService {

    @Autowired
    private IllnessesRepository illnessesRepository;

    public IllnessService(IllnessesRepository illnessesRepository) {
        this.illnessesRepository = illnessesRepository;
    }

    public List<Illnesses> findAllIllnessesBySymptomIds(List<Symptoms> symptomIds) {
        List<Illnesses> illnessesList = new ArrayList<>();

        //get all illnesses that contain given symptom ids
        for(int i = 0; i < symptomIds.size(); i++ ){
            Symptoms currentSymptomId = symptomIds.get(i);
            List<Illnesses> currentIllnesses = illnessesRepository.findIllnessesBySimptomId(currentSymptomId);
            if(!currentIllnesses.isEmpty()){
                illnessesList.addAll(currentIllnesses);
            }
        }
        //Remove dublicated illnesses and increase their probability
        return illnessesList;
    }
}
