package bg.healthcheck.BIYD.controllers;

import bg.healthcheck.BIYD.repositories.RolesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/app/roles")
public class RolesController {

    @Autowired
    private RolesRepository rolesRepository;

    public RolesController(RolesRepository rolesRepository) {
        this.rolesRepository = rolesRepository;
    }

}
