package com.devinci_codes.cms.controller;

import com.devinci_codes.cms.models.Person;
import com.devinci_codes.cms.services.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class UserController {
    private final UserService userService;
    private final ObjectMapper mapper;

    public UserController(UserService userService, ObjectMapper objectMapper) {
        this.userService = userService;
        this.mapper = objectMapper;
    }

    @PostMapping("/login")
    public ResponseEntity<JsonNode> login(@RequestBody JsonNode loginRequest) throws JsonProcessingException {
       Person person=  userService.checkUserIfValid(loginRequest);



        ObjectNode response = mapper.createObjectNode();


        if (person!=null) {
            response.put("message", "Login successful and user created");
            JsonNode complaintNode = mapper.valueToTree(person);

            // Create a response
            response.set("user", complaintNode);
        } else {

            response.put("message", "Login failed or user creation failed");

        }

        return ResponseEntity.ok(response);
    }

    // Other endpoints...
}
