package com.devinci_codes.cms.repositories;
import com.devinci_codes.cms.models.Teacher;

import java.io.*;
import java.util.*;
public class TeacherRepository {
        public Teacher[] getAllTeachers() {
            String fileName = "src/main/java/com/devinci_codes/cms/entities/teacherEntity.txt";
            ArrayList<Teacher> teachers = new ArrayList<>();

            try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    if (line.startsWith("id: ")) {
                        Teacher teacher = new Teacher();
                        teacher.setId(Long.parseLong(line.substring(4).trim()));

                        line = reader.readLine();
                        teacher.setUsername(line.substring(9).trim());

                        line = reader.readLine();
                        teacher.setEmail(line.substring(6).trim());

                        line = reader.readLine();
                        teacher.setPassword(line.substring(10).trim());

                        line = reader.readLine();
                        teacher.setRole(line.substring(6).trim());

                        teachers.add(teacher);
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
            }

            return teachers.toArray(new Teacher[0]);
        }


}
