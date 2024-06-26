package com.devinci_codes.cms.models;


public class Teacher extends Person {

    private String role = "Teacher";

    public Teacher(String email, String password) {
        super(email, password);
    }

    public Teacher() {
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
