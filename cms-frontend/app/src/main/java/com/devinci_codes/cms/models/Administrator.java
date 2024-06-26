package com.devinci_codes.cms.models;

public class Administrator extends Person{
    private String role = "Admin";

    public Administrator(String email, String password) {
        super(email, password);
    }

    public Administrator() {
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

