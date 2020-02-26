package com.example.demo.ymalProduct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class YmalProductDataAccessService {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public YmalProductDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    List<YmalProduct> selectAllYmalProducts() {
        String sql = "" +
                "SELECT "+
                " ymal_id," +
                " name, " +
                " designer, " +
                " colour, " +
                " category " +
                "FROM ymal_product";
        return jdbcTemplate.query(sql, mapYmalProductFromDb());
    }

    private RowMapper<YmalProduct> mapYmalProductFromDb() {
        return (resultSet, i) -> {
            Integer ymal_id = resultSet.getInt("ymal_id");
            String name = resultSet.getString("name");
            String designer = resultSet.getString("designer");
            String colour = resultSet.getString("colour");
            String category =  resultSet.getString("category");
            return new YmalProduct(
                    ymal_id,
                    name,
                    designer,
                    colour,
                    category
            );
        };
    }
}
