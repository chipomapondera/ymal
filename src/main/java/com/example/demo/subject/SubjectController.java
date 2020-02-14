package com.example.demo.subject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
public class SubjectController {

    @Autowired
    SubjectRepository subjectRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/subjects")
    public List<Subject> getAllSubjects() {
        List<Subject> subjects = new ArrayList<>();
        subjects.addAll(subjectRepository.findAll());
        return subjects;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/subjects")
    public Subject addSubject(@RequestBody Subject subject) {
        subjectRepository.save(subject);
        return subject;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/subjects/{id}")
    public void deleteSubject(@PathVariable int id) {
        subjectRepository.deleteById(id);
    }
}
