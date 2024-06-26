package com.devinci_codes.cms.models;

public class Manager extends  Person{
    private String role = "Manager";

    public Manager(String email, String password) {
        super(email, password);
    }

    public Manager() {
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
