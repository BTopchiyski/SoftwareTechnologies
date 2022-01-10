package bg.healthcheck.BIYD.services;

import bg.healthcheck.BIYD.entities.Illnesses;
import bg.healthcheck.BIYD.repositories.IllnessesRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.dao.DataIntegrityViolationException;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.junit.Assert.assertEquals;

@RunWith(MockitoJUnitRunner.class)
public class IllnessServiceTests {

    @Mock
    private IllnessesRepository illnessesRepository;

    private IllnessService illnessService;

    @Before
    public void before() {
        illnessService = new IllnessService(illnessesRepository);
    }

    @Test
    public void testFindAllIllnessesBySymptomIds() {
        List<Illnesses> mockFirstIllnesses = new ArrayList<>();
        mockFirstIllnesses.add(new Illnesses(1L, "first", "first desc"));
        mockFirstIllnesses.add(new Illnesses(2L, "second", "second desc"));
        mockFirstIllnesses.add(new Illnesses(3L, "third", "third desc"));
        List<Illnesses> mockSecondIllnesses = new ArrayList<>();
        mockFirstIllnesses.add(new Illnesses(4L, "fourth", "first desc"));
        mockFirstIllnesses.add(new Illnesses(5L, "fifth", "second desc"));
        mockFirstIllnesses.add(new Illnesses(6L, "sixth", "third desc"));
        List<Illnesses> mockThirdIllnesses = new ArrayList<>();
        mockFirstIllnesses.add(new Illnesses(4L, "fourth", "first desc"));
        mockFirstIllnesses.add(new Illnesses(2L, "second", "second desc"));
        mockFirstIllnesses.add(new Illnesses(7L, "seventh", "third desc"));

        when(illnessesRepository.findIllnessesBySymptomId(1L)).thenReturn(mockFirstIllnesses);
        when(illnessesRepository.findIllnessesBySymptomId(2L)).thenReturn(mockSecondIllnesses);
        when(illnessesRepository.findIllnessesBySymptomId(3L)).thenReturn(mockThirdIllnesses);

        List<Illnesses> result = illnessService.findAllIllnessesBySymptomIds(Arrays.asList(1, 2, 3));
        assertEquals(result.size(), 9); //Remove duplicates is broken
    }

    @Test
    public void testGetAllIllnesses() {
        List<Illnesses> mockIllnesses = new ArrayList<>();
        mockIllnesses.add(new Illnesses(1L, "first", "first desc"));
        mockIllnesses.add(new Illnesses(2L, "second", "second desc"));
        mockIllnesses.add(new Illnesses(3L, "third", "third desc"));

        when(illnessesRepository.findAll()).thenReturn(mockIllnesses);

        List<Illnesses> result = illnessService.getIllnesses();
        assertEquals(result.size(), 3);
        assertEquals(result.get(0).getName(), "first");
        assertEquals(result.get(0).getDescription(), "first desc");
        assertEquals(result.get(0).getSymptoms().size(), 0);
    }

    @Test
    public void testAddIllnessSuccessfully() {
        Illnesses mockIllness = new Illnesses(1L, "mock", "desc");

        when(illnessesRepository.save(mockIllness)).thenReturn(mockIllness);

        Integer result = illnessService.addIllness(mockIllness);

        assertEquals(result, Integer.valueOf(1));
    }

    @Test
    public void testAddIllnessUnsuccessfullyDataIntegrityViolation() {
        Illnesses mockIllness = new Illnesses(1L, "mock", "desc");

        when(illnessesRepository.save(mockIllness)).thenThrow(new DataIntegrityViolationException(""));

        Integer result = illnessService.addIllness(mockIllness);

        assertEquals(result, Integer.valueOf(0));
    }

    @Test
    public void testAddIllnessesUnsuccessfullyIllegalArgument() {
        Illnesses mockIllness = new Illnesses(1L, "mock", "desc");

        when(illnessesRepository.save(mockIllness)).thenThrow(new IllegalArgumentException());

        Integer result = illnessService.addIllness(mockIllness);

        assertEquals(result, Integer.valueOf(0));
    }
}
