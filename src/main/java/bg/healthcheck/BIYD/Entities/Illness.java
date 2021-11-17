package bg.healthcheck.BIYD.Entities;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="illness")
public class Illness {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="description")
    private String description;

    @ManyToMany
    @JoinTable(name="illness_symptoms",
            joinColumns = @JoinColumn(name="illness_id"),
            inverseJoinColumns = @JoinColumn(name="symptoms_id"))
    private Set<Symptom> symptoms=new HashSet<Symptom>();

    public Illness() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<Symptom> getSymptoms() {
        return symptoms;
    }

    public void setSymptoms(Set<Symptom> symptoms) {
        this.symptoms = symptoms;
    }
}
