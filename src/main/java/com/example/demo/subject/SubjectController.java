package com.example.demo.subject;

import com.example.demo.exception.ApiRequestException;
import com.example.demo.ymalProduct.YmalProduct;
import com.example.demo.ymalProduct.YmalProductRepository;
import com.example.demo.ymalProduct.YmalProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

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
        List<Subject> subject = subjectService.getAllSubjects();
//        List<Subject> subject = null;

        if (subject == null)
            throw new ApiRequestException("Oops cannot get all subjects");

        return subject;
    }

    @PostMapping(path = "/subject", consumes = MediaType.APPLICATION_JSON_VALUE)
    public @Valid Subject addSubject(@RequestBody @Valid Subject subject) {
        return subjectService.createSubject(subject);
    }

    @PostMapping(path = "/save")
    public void save() {
        List<YmalProduct> ymalProducts = ymalProductService.getAllCreatableYmalProducts();
        for (YmalProduct product: ymalProducts
             ) {
            product.setVersionAction(null);
            ymalProductService.saveYmalProduct(product);
        }
    }

    @GetMapping(path = "/ymalproducts")
    public List<YmalProduct> getYmalProducts() {
        return ymalProductService.getAllActiveYmalProducts();
    }

    @PostMapping(path = "/{subject_id}/ymalproduct", consumes = MediaType.APPLICATION_JSON_VALUE)
    public YmalProduct addYmalProduct(@PathVariable(value = "subject_id") int subject_id, @RequestBody @Valid YmalProduct ymalProduct) {
        return ymalProductService.createYmalProduct(subject_id, ymalProduct);
    }

    @DeleteMapping(path = "/subjects/{subject_id}")
    public void deleteSubject(@PathVariable int subject_id) {
        subjectRepository.deleteById(subject_id);
    }

    @DeleteMapping(path="ymalproducts/{ymal_id}")
    public void deleteYmalProduct(@PathVariable int ymal_id) {
        ymalProductRepository.deleteById(ymal_id);
    }
}
