package bg.healthcheck.BIYD.entities;

import javax.persistence.*;

@Entity
@Table(name="user")
public class Users {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    @Column(name="username")
    private String username;

    @Column(name="email")
    private String email;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Roles role;

    public Users() {
    }

    public Users(Long id, String username, String email, Roles role) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.role = role;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Roles getRole() {
        return role;
    }

    public void setRole(Roles role) {
        this.role = role;
    }
}
