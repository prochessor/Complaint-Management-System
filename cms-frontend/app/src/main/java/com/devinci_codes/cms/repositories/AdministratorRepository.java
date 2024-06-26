package com.devinci_codes.cms.repositories;

import com.devinci_codes.cms.models.Administrator;

import java.io.*;
import java.util.*;

public class AdministratorRepository {
    public Administrator[] getAllAdministrators() {
        String fileName = "src/main/java/com/devinci_codes/cms/entities/administratorEntity.txt";
        ArrayList<Administrator> administrators = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
            String line;
            while ((line = reader.readLine()) != null) {
                if (line.startsWith("id: ")) {
                    Administrator administrator = new Administrator();
                    administrator.setId(Long.parseLong(line.substring(4).trim()));

                    line = reader.readLine();
                    administrator.setUsername(line.substring(9).trim());

                    line = reader.readLine();
                    administrator.setEmail(line.substring(6).trim());

                    line = reader.readLine();
                    administrator.setPassword(line.substring(10).trim());

                    line = reader.readLine();
                    administrator.setRole(line.substring(6).trim());

                    administrators.add(administrator);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return administrators.toArray(new Administrator[0]);
    }
}
