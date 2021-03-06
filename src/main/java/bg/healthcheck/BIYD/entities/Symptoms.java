package bg.healthcheck.BIYD.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="symptom")
public class Symptoms {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="body_part_id")
    private Long body_part;

    @ManyToMany(mappedBy = "symptoms")
    @JsonIgnore
    Set<Illnesses> illnesses=new HashSet<Illnesses>();

    public Symptoms() {
    }

    public Symptoms(Long id, String name, Long body_part, Set<Illnesses> illnesses) {
        this.id = id;
        this.name = name;
        this.body_part = body_part;
        this.illnesses = illnesses;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getBody_part() {
        return body_part;
    }

    public void setBody_part(Long body_part) {
        this.body_part = body_part;
    }

    public Set<Illnesses> getIllnesses() {
        return illnesses;
    }

    public void setIllnesses(Set<Illnesses> illnesses) {
        this.illnesses = illnesses;
    }
}
