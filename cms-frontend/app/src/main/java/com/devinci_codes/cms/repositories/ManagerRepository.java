package com.devinci_codes.cms.repositories;

import com.devinci_codes.cms.models.Manager;

import java.io.*;
import java.util.*;

public class ManagerRepository {
    public Manager[] getAllManagers() {
        String fileName = "src/main/java/com/devinci_codes/cms/entities/managerEntity.txt";
        ArrayList<Manager> managers = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
            String line;
            while ((line = reader.readLine()) != null) {
                if (line.startsWith("id: ")) {
                    Manager manager = new Manager();
                    manager.setId(Long.parseLong(line.substring(4).trim()));

                    line = reader.readLine();
                    manager.setUsername(line.substring(9).trim());

                    line = reader.readLine();
                    manager.setEmail(line.substring(6).trim());

                    line = reader.readLine();
                    manager.setPassword(line.substring(10).trim());

                    line = reader.readLine();
                    manager.setRole(line.substring(6).trim());

                    managers.add(manager);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return managers.toArray(new Manager[0]);
    }
}
