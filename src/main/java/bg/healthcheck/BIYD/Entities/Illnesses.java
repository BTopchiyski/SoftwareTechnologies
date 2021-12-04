package bg.healthcheck.BIYD.entities;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="illness")
public class Illnesses {
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
    private Set<Symptoms> symptoms = new HashSet<>();

    public Illnesses() {
    }

    public Illnesses(Long id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
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

    public Set<Symptoms> getSymptoms() {
        return symptoms;
    }

    public void setSymptoms(Set<Symptoms> symptoms) {
        this.symptoms = symptoms;
    }
}
