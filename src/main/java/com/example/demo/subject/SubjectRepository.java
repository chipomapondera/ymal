package com.example.demo.subject;

import com.example.demo.ymalProduct.YmalProduct;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Timestamp;
import java.util.List;

public interface SubjectRepository extends JpaRepository<Subject, Integer> {
    List<Subject> findAll();
}
