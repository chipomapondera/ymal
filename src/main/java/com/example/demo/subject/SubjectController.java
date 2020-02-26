package com.example.demo.subject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class SubjectController {

    private final SubjectService subjectService;

    @Autowired
    public SubjectController(SubjectService subjectService) {
        this.subjectService = subjectService;
    }

    @Autowired
    SubjectRepository subjectRepository;

//    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/subjects")
    public List<Subject> getAllSubjects() {
        return subjectService.getAllSubjects();
    }

//    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/subjects")
    public Subject addSubject(@RequestBody Subject subject) {
        subjectRepository.save(subject);
        return subject;
    }

//    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/subjects/{subject_id}")
    public void deleteSubject(@PathVariable int subject_id) {
        subjectRepository.deleteById(subject_id);
    }
}
