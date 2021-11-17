package bg.healthcheck.BIYD.Entities;

import javax.persistence.*;

@Entity
@Table(name="body_part")
public class BodyPart {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    public BodyPart() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
