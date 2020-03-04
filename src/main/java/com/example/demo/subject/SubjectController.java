package com.example.demo.subject;

import com.example.demo.exception.ApiRequestException;
import com.example.demo.ymalProduct.YmalProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
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

    @Autowired
    YmalProductRepository ymalProductRepository;

//    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/subjects")
    public List<Subject> getAllSubjects() {
//        throw new ApiRequestException("Oops cannot get all subjects with custom exception");
        return subjectRepository.findAll(Sort.by(Sort.Direction.DESC, "timestamp"));
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

    @DeleteMapping(path="ymalproducts/{ymal_id}")
    public void deleteYmalProduct(@PathVariable("ymal_id") int ymal_id) {
        ymalProductRepository.deleteById(ymal_id);
    }
}
