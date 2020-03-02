package com.example.demo.ymalProduct;

import com.example.demo.exception.ApiRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class YmalProductController {

//    private final YmalProductService ymalProductService;
//
//    @Autowired
//    public YmalProductController(YmalProductService ymalProductService) {
//        this.ymalProductService = ymalProductService;
//    }

    @Autowired
    YmalProductRepository ymalProductRepository;

//    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/ymalproducts")
    public List<YmalProduct> getAllYmalProducts() {
//        throw new ApiRequestException("Oops cannot get all ymalProducts with custom exception");
        return ymalProductRepository.findAll(Sort.by(Sort.Direction.ASC, "designer"));
    }

//    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/ymalproducts")
    public YmalProduct addYmalProduct(@RequestBody @Valid YmalProduct ymalProduct) {
        ymalProductRepository.save(ymalProduct);
        return ymalProduct;
    }

//    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/ymalproducts/{ymal_id}")
    public void deleteYmalProduct(@PathVariable("ymal_id") int ymal_id) {
        ymalProductRepository.deleteById(ymal_id);
    }
}
