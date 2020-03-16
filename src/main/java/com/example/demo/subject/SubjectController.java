package com.example.demo.subject;

import com.example.demo.ymalProduct.YmalProduct;
import com.example.demo.ymalProduct.YmalProductRepository;
import com.example.demo.ymalProduct.YmalProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
public class SubjectController {

    @Autowired
    SubjectRepository subjectRepository;

    @Autowired
    YmalProductRepository ymalProductRepository;

    @Autowired
    SubjectService subjectService;

    @Autowired
    YmalProductService ymalProductService;

    @GetMapping(path = "/subjects")
    public List<Subject> getAllSubjects() {
//        throw new ApiRequestException("Oops cannot get all subjects with custom exception");
        return subjectService.getAllSubjects();
    }

    @PostMapping(path = "/subject", consumes = MediaType.APPLICATION_JSON_VALUE)
    public @Valid Subject addSubject(@RequestBody @Valid Subject subject) {
        return subjectService.createSubject(subject);
    }

    @GetMapping(path = "/ymalproducts")
    public List<YmalProduct> getYmalProducts() {
        return ymalProductService.getAllYmalProducts();
    }

    @PostMapping(path = "/{subject_id}/ymalproduct", consumes = MediaType.APPLICATION_JSON_VALUE)
    public YmalProduct addYmalProduct(@PathVariable(value = "subject_id") int subject_id, @RequestBody @Valid YmalProduct ymalProduct) {
        return ymalProductService.createYmalProduct(subject_id, ymalProduct);
    }

    @DeleteMapping(path = "/subjects/{subject_id}")
    public void deleteSubject(@PathVariable("subject_id") int subject_id) {
        subjectRepository.deleteById(subject_id);
    }

    @DeleteMapping(path="ymalproducts/{ymal_id}")
    public void deleteYmalProduct(@PathVariable("ymal_id") int ymal_id) {
        ymalProductRepository.deleteById(ymal_id);
    }
}
