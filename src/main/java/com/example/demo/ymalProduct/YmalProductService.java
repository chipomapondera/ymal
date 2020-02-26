package com.example.demo.ymalProduct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class YmalProductService {

    private final YmalProductDataAccessService ymalProductDataAccessService;

    @Autowired
    public YmalProductService(YmalProductDataAccessService ymalProductDataAccessService) {
        this.ymalProductDataAccessService = ymalProductDataAccessService;
    }

    public List<YmalProduct> getAllYmalProducts() {
        return ymalProductDataAccessService.selectAllYmalProducts();
    }
}
