package bg.healthcheck.BIYD.payload;

import lombok.Data;
import javax.validation.constraints.NotBlank;

@Data
public class LoginDto {
    @NotBlank
    private String usernameOrEmail;

    @NotBlank
    private String password;

    public String getUsernameOrEmail() {
        return usernameOrEmail;
    }

    public void setUsername(String username) {
        this.usernameOrEmail = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
