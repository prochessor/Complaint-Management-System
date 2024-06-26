package com.devinci_codes.cms.services;

import com.devinci_codes.cms.models.*;
import com.devinci_codes.cms.repositories.*;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.*;

@Service
public class UserService {

    public UserService() {

    }


    public Person checkUserIfValid(JsonNode loginRequest) {

        String email = loginRequest.get("email").asText();
        String password = loginRequest.get("password").asText();
        System.out.println(email);
        System.out.println(password);

        if(email.contains("@teacher.com")){
            System.out.println("Checking teachers...");

            TeacherRepository teacherRepository = new TeacherRepository();
            Teacher[] teachers = teacherRepository.getAllTeachers();

            for (Teacher teacher : teachers) {
                if (teacher.getEmail().equals(email) && teacher.getPassword().equals(password)) {
                    return teacher;
                }
            }
        } else if(email.contains("@administrator.com")){
            System.out.println("Checking administrators...");

            AdministratorRepository administratorRepository = new AdministratorRepository();
            Administrator[] administrators = administratorRepository.getAllAdministrators();

            for (Administrator administrator : administrators) {
                System.out.println("email: " + administrator.getEmail());
                System.out.println("password: " + administrator.getPassword());

                if (administrator.getEmail().equals(email) && administrator.getPassword().equals(password)) {

                    return administrator;

                }
            }
        } else if(email.contains("@director.com")){
            System.out.println("Checking directors...");

            DirectorRepository directorRepository = new DirectorRepository();
            Director[] directors = directorRepository.getAllDirectors();

            for (Director director : directors) {
                if (director.getEmail().equals(email) && director.getPassword().equals(password)) {
                    return director;
                }
            }
        } else if(email.contains("@manager.com")){
            System.out.println("Checking managers...");

            ManagerRepository managerRepository = new ManagerRepository();
            Manager[] managers = managerRepository.getAllManagers();

            for (Manager manager : managers) {
                if (manager.getEmail().equals(email) && manager.getPassword().equals(password)) {
                    return manager;
                }
            }
        } else if(email.contains("@employee.com")){
            System.out.println("Checking employees...");

            EmployeeRepository employeeRepository = new EmployeeRepository();
            Employee[] employees = employeeRepository.getAllEmployees();

            for (Employee employee : employees) {
                if (employee.getEmail().equals(email) && employee.getPassword().equals(password)) {
                    return employee;
                }
            }
        }

// If no matching user is found, return null or handle the case as needed
        return null;

    }
}
