package bg.healthcheck.BIYD.entities;

public enum ERole {
    ROLE_PATIENT("Patient"),
    ROLE_DOCTOR("Doctor");

    public String role;

    ERole(String role){
        this.role = role;
    }
}
