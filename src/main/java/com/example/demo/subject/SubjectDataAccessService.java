package com.example.demo.subject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
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
                " subject_id," +
                " name, " +
                " designer, " +
                " colour, " +
                " category " +
                "FROM subject";
        return jdbcTemplate.query(sql, mapSubjectFromDb());
    }

    private RowMapper<Subject> mapSubjectFromDb() {
        return (resultSet, i) -> {
            Integer subject_id = resultSet.getInt("subject_id");
            String name = resultSet.getString("name");
            String designer = resultSet.getString("designer");
            String colour = resultSet.getString("colour");
            String category = resultSet.getString("category");
            return new Subject(
                    subject_id,
                    name,
                    designer,
                    colour,
                    category
            );
        };
    }
}
