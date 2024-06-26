package com.devinci_codes.cms.repositories;

import com.devinci_codes.cms.models.Employee;

import java.io.*;
import java.util.*;

public class EmployeeRepository {
    public Employee[] getAllEmployees() {
        String fileName = "src/main/java/com/devinci_codes/cms/entities/employeeEntity.txt";
        ArrayList<Employee> employees = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
            String line;
            while ((line = reader.readLine()) != null) {
                if (line.startsWith("id: ")) {
                    Employee employee = new Employee();
                    employee.setId(Long.parseLong(line.substring(4).trim()));

                    line = reader.readLine();
                    employee.setUsername(line.substring(9).trim());

                    line = reader.readLine();
                    employee.setEmail(line.substring(6).trim());

                    line = reader.readLine();
                    employee.setPassword(line.substring(10).trim());

                    line = reader.readLine();
                    employee.setRole(line.substring(6).trim());

                    employees.add(employee);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return employees.toArray(new Employee[0]);
    }
}
