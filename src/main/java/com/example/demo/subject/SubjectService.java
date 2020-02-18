package com.example.demo.subject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class SubjectService {

    private final SubjectDataAccessService subjectDataAccessService;

    @Autowired
    public SubjectService(SubjectDataAccessService subjectDataAccessService) {
        this.subjectDataAccessService = subjectDataAccessService;
    }

    public List<Subject> getAllSubjects() {
        return subjectDataAccessService.selectAllSubjects();
    }
}

