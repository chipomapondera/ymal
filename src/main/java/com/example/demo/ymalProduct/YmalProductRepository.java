package com.example.demo.ymalProduct;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface YmalProductRepository extends JpaRepository<YmalProduct, Integer> {
    List<YmalProduct> findAll();
    List<YmalProduct> findByVersionActionIsNull();
    List<YmalProduct> findByVersionAction(String versionAction);
}
