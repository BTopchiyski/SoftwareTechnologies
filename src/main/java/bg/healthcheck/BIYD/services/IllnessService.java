package bg.healthcheck.BIYD.services;
import bg.healthcheck.BIYD.entities.Illnesses;
import bg.healthcheck.BIYD.entities.Symptoms;
import bg.healthcheck.BIYD.repositories.IllnessesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;


@Service
public class IllnessService {

    @Autowired
    private IllnessesRepository illnessesRepository;

    public IllnessService(IllnessesRepository illnessesRepository) {
        this.illnessesRepository = illnessesRepository;
    }

    public List<Illnesses> findAllIllnessesBySymptomIds(List<Integer> symptomIds) {
        List<Illnesses> illnessesList = new ArrayList<>();

        //get all illnesses that contain given symptom ids
        for(int i = 0; i < symptomIds.size(); i++ ){
            Long currentSymptomId = Long.parseLong(symptomIds.get(i).toString());
            List<Illnesses> currentIllnesses = illnessesRepository.findIllnessesBySymptomId(currentSymptomId);
            if(!currentIllnesses.isEmpty()){
                illnessesList.addAll(currentIllnesses);
            }
        }

        List<Illnesses> reformatedListIllnesses = removeDuplicateIllnesses(illnessesList);
        return orderIllnessesByMatchedSymptoms(reformatedListIllnesses, symptomIds);

    }

    public List<Illnesses> getIllnesses() {
        return illnessesRepository.findAll();
    }

    public List<Illnesses> removeDuplicateIllnesses(List<Illnesses> currentIllnesses) {
        List<Illnesses> refactoredIllnessesList = new ArrayList<Illnesses>();
        for(Illnesses illnesses : currentIllnesses) {
            if(!refactoredIllnessesList.contains(illnesses)){
                refactoredIllnessesList.add(illnesses);
            }
        }
        return refactoredIllnessesList;
    }

    public List<Illnesses> getSymptomsGroupedByEqualsSymptomCount(){
        List<Illnesses> matchedIllnesBySyptoms  = illnessesRepository.getIllnessesByMatchedSymptoms();
                return matchedIllnesBySyptoms;
    }

    public List<Illnesses> orderIllnessesByMatchedSymptoms(List<Illnesses> currentIllnesses, List<Integer> symptomIds) {

        Integer[] matchedSymptoms = new Integer[currentIllnesses.size()];
        for(int i = 0; i < currentIllnesses.size(); i++) {
                Set<Symptoms> currentIllnessSymptoms = currentIllnesses.get(i).getSymptoms();
                matchedSymptoms[i] = getMatchedSymptomsCount(symptomIds, currentIllnessSymptoms);
        }

        Boolean sorted = false;
        Integer temp;
        Illnesses tempIllness;
        while(!sorted) {
            sorted = true;
            for (Integer i = 0; i < matchedSymptoms.length - 1; i++) {
                if (matchedSymptoms[i] < matchedSymptoms[i+1]) {
                    temp = matchedSymptoms[i];
                    tempIllness = currentIllnesses.get(i);


                    currentIllnesses.set(i, currentIllnesses.get(i+1));
                    currentIllnesses.set(i+1, tempIllness);

                    matchedSymptoms[i] = matchedSymptoms[i+1];
                    matchedSymptoms[i+1] = temp;
                    sorted = false;
                }
            }
        }

        return currentIllnesses;


    }

    private Integer getMatchedSymptomsCount(List<Integer> symptomIds, Set<Symptoms> currentIllnessSymptoms) {
        Integer matched = 0;
        for(Integer i=0; i<symptomIds.size(); i++){
            for(Symptoms symptoms : currentIllnessSymptoms){
                if(symptomIds.get(i) == symptoms.getId().intValue()){
                    matched++;
                }
            }
        }
        return matched;
    }

}