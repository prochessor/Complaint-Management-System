package com.devinci_codes.cms.models;

public class Director extends Person{
    private String role = "Director";

    public Director(String email, String password) {
        super(email, password);
    }

    public Director() {
        super();
    }

    // getters and setters
    public String getRole() {
        return role;
    }

    public void setRole(String value) {
        this.role = value;
    }
}
