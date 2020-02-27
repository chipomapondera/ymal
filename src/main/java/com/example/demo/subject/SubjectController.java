package com.example.demo.subject;

import com.example.demo.exception.ApiRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class SubjectController {

//    private final SubjectService subjectService;
//
//    @Autowired
//    public SubjectController(SubjectService subjectService) {
//        this.subjectService = subjectService;
//    }

    @Autowired
    SubjectRepository subjectRepository;

//    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/subjects")
    public List<Subject> getAllSubjects() {
//        throw new ApiRequestException("Oops cannot get all subjects with custom exception");
        return subjectRepository.findAll();
    }

//    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/subjects")
    public Subject addSubject(@RequestBody @Valid Subject subject) {
        subjectRepository.save(subject);
        return subject;
    }

//    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/subjects/{subject_id}")
    public void deleteSubject(@PathVariable("subject_id") int subject_id) {
        subjectRepository.deleteById(subject_id);
    }
}
