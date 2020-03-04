package com.example.demo.subject;

import com.example.demo.ymalProduct.YmalProduct;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="subject")
public class Subject {

    @Id
    private int subject_id;

    @NotBlank
    private String name;

    @NotBlank
    private String designer;

    @NotBlank
    private String colour;

    @NotBlank
    private String category;

    private Timestamp timestamp;

    public Subject() {
        super();
    }

    public Subject(
            @JsonProperty("subject_id") int subject_id,
            @JsonProperty("name") String name,
            @JsonProperty("designer") String designer,
            @JsonProperty("colour") String colour,
            @JsonProperty("category") String category,
            @JsonProperty("timestamp") Timestamp timestamp) {
        this.subject_id = subject_id;
        this.name = name;
        this.designer = designer;
        this.colour = colour;
        this.category = category;
        this.timestamp = timestamp;
    }

    @OneToMany(mappedBy="subject", orphanRemoval=true, cascade=CascadeType.ALL)
    @LazyCollection(LazyCollectionOption.FALSE)
    @OrderBy("timestamp")
    private List<YmalProduct> ymalProductList = new ArrayList<>();
//    private Set<YmalProduct> ymalProduct;

    public int getId() {
        return subject_id;
    }

    public void setId(int subject_id) {
        this.subject_id = subject_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesigner() {
        return designer;
    }

    public void setDesigner(String designer) {
        this.designer = designer;
    }

    public String getColour() {
        return colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @JsonManagedReference
    public List<YmalProduct> getYmalProductList() {
        return ymalProductList;
    }

    public void setYmalProductList(List<YmalProduct> ymalProductList) {
        this.ymalProductList = ymalProductList;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }

    @Override
    public String toString() {
        return "Subject{" +
                "subject_id=" + subject_id +
                ", name='" + name + '\'' +
                ", designer='" + designer + '\'' +
                ", colour='" + colour + '\'' +
                ", category='" + category + '\'' +
                '}';
    }
}
