package com.example.demo.ymalProduct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class YmalProductController {

    @Autowired
    YmalProductRepository ymalProductRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/ymalproducts")
    public List<YmalProduct> getAllYmalProducts() {
        List<YmalProduct> ymalProducts = new ArrayList<>();
        ymalProducts.addAll(ymalProductRepository.findAll());
        return ymalProducts;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/ymalproducts")
    public YmalProduct addYmalProduct(@RequestBody YmalProduct ymalProduct) {
        ymalProductRepository.save(ymalProduct);
        return ymalProduct;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/ymalproducts/{id}")
    public void deleteYmalProduct(@PathVariable int id) {
        ymalProductRepository.deleteById(id);
    }
}
