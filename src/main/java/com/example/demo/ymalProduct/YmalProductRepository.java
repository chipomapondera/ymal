package com.example.demo.ymalProduct;

import com.example.demo.subject.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface YmalProductRepository extends JpaRepository<YmalProduct, Integer> {
    List<YmalProduct> findAll();
}
