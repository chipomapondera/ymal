package com.example.demo.subject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.validation.beanvalidation.SpringValidatorAdapter;

import java.util.List;

@Repository
public class SubjectDataAccessService {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public SubjectDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    List<Subject> selectAllSubjects() {
        String sql = "" +
                "SELECT "+
                " id," +
                " name, " +
                " designer, " +
                " colour, " +
                " category " +
                "FROM subject";
        return jdbcTemplate.query(sql, mapSubjectFromDb());
    }

    private RowMapper<Subject> mapSubjectFromDb() {
        return (resultSet, i) -> {
            Integer id = resultSet.getInt("id");
            String name = resultSet.getString("name");
            String designer = resultSet.getString("designer");
            String colour = resultSet.getString("colour");
            String category = resultSet.getString("category");
            return new Subject(
                    id,
                    name,
                    designer,
                    colour,
                    category
            );
        };
    }
}
