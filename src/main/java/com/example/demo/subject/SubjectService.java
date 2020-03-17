package com.example.demo.subject;

import com.example.demo.exception.ApiRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubjectService {

    private Subject subject;

    @Autowired
    SubjectRepository subjectRepository;

    public List<Subject> getAllSubjects() {
//        throw new ApiRequestException("Oops cannot get all subjects with custom exception");
        return subjectRepository.findAll(Sort.by(Sort.Direction.DESC, "timestamp"));
    }

    public Subject createSubject(Subject subject) {
        return subjectRepository.save(subject);
    }

//    public Subject removeSubject(Subject subject) {
//        return subjectRepository.deleteById();
//    }
}

