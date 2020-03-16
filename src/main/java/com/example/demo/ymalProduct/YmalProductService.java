package com.example.demo.ymalProduct;

import com.example.demo.exception.ApiRequestException;
import com.example.demo.subject.Subject;
import com.example.demo.subject.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.*;

@Service
public class YmalProductService {

    @Autowired
    SubjectRepository subjectRepository;

    @Autowired
    YmalProductRepository ymalProductRepository;

    public List <YmalProduct> getAllYmalProducts() {
        return ymalProductRepository.findAll();
    }

    public Optional<YmalProduct> getYmalProductById(int ymal_id) {
        if (!ymalProductRepository.existsById(ymal_id)) {
            throw new ApiRequestException("Oops product with ID " + ymal_id + "does not exist");
        }
        return ymalProductRepository.findById(ymal_id);
    }

    public YmalProduct createYmalProduct(int subject_id, YmalProduct ymalProduct) {
        List<YmalProduct> ymalProductList = new ArrayList<>();
        Subject subject1 = new Subject();

        Optional<Subject> byId = subjectRepository.findById(subject_id);
        if (!byId.isPresent()) {
            throw new ApiRequestException("Oops subject with ID " + subject_id + "does not exist");
        }
        Subject subject = byId.get();

        ymalProduct.setSubject(subject);

        YmalProduct ymalProduct1 = ymalProductRepository.save(ymalProduct);

        ymalProductList.add(ymalProduct1);
        subject1.setYmalProductList((List<YmalProduct>) ymalProductList);

        return ymalProduct1;
    }

}
