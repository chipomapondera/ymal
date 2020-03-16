package com.example.demo.subject;

import com.example.demo.exception.ApiRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubjectService {
    private Subject subject;

    @Autowired
    SubjectRepository subjectRepository;

    public Subject createOrUpdateSubject(Subject subject) {
        if (subject == null) {
            throw new ApiRequestException("Oops cannot get all subjects with custom exception");
        } else {
            return subjectRepository.saveAndFlush(subject);
        }
    }
}

