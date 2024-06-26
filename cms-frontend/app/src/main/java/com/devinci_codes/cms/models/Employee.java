package com.devinci_codes.cms.models;


public class Employee extends Person {
    private String role = "Employee";

    public Employee(String email, String password) {
        super(email, password);
    }

    public Employee() {
        super();
    }

    // getters and setters
    public String getRole() {
        return role;
    }

    public void setRole(String value) {
        this.role = value;
    }
    // getters and setters
}
