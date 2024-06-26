package com.devinci_codes.cms.repositories;

import com.devinci_codes.cms.models.Director;

import java.io.*;
import java.util.*;

public class DirectorRepository {
    public Director[] getAllDirectors() {
        String fileName = "src/main/java/com/devinci_codes/cms/entities/directorEntity.txt";
        ArrayList<Director> directors = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
            String line;
            while ((line = reader.readLine()) != null) {
                if (line.startsWith("id: ")) {
                    Director director = new Director();
                    director.setId(Long.parseLong(line.substring(4).trim()));

                    line = reader.readLine();
                    director.setUsername(line.substring(9).trim());

                    line = reader.readLine();
                    director.setEmail(line.substring(6).trim());

                    line = reader.readLine();
                    director.setPassword(line.substring(10).trim());

                    line = reader.readLine();
                    director.setRole(line.substring(6).trim());

                    directors.add(director);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return directors.toArray(new Director[0]);
    }
}
