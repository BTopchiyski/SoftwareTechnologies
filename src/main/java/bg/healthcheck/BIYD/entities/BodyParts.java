package bg.healthcheck.BIYD.entities;

import javax.persistence.*;

@Entity
@Table(name="body_part")
public class BodyParts {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    public BodyParts() {
    }

    public BodyParts(Long id, String name) {
        this.id = id;
        this.name = name;
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
}
