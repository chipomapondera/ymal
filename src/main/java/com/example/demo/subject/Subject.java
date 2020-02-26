package com.example.demo.subject;

import com.example.demo.ymalProduct.YmalProduct;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="subject")
public class Subject {

    @Id
    private int subject_id;
    private String name;
    private String designer;
    private String colour;
    private String category;

    public Subject() {
        super();
    }

    public Subject(
            @JsonProperty("subject_id") int subject_id,
            @JsonProperty("name") String name,
            @JsonProperty("designer") String designer,
            @JsonProperty("colour") String colour,
            @JsonProperty("category") String category) {
        this.subject_id = subject_id;
        this.name = name;
        this.designer = designer;
        this.colour = colour;
        this.category = category;
    }

    @OneToMany(cascade=CascadeType.ALL, mappedBy="subject")
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

    public List<YmalProduct> getYmalProductList() {
        return ymalProductList;
    }

    public void setYmalProductList(List<YmalProduct> ymalProductList) {
        this.ymalProductList = ymalProductList;
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
