package bg.healthcheck.BIYD.Entities;

public enum ERole {
    ROLE_PATIENT("Patient"),
    ROLE_DOCTOR("Doctor");

    public String role;

    ERole(String role){
        this.role = role;
    }
}
