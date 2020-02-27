package com.example.demo.ymalProduct;

import com.example.demo.subject.Subject;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name="ymal_product")
public class YmalProduct {

    @Id
    private int ymal_id;

    private String name;
    private String designer;
    private String colour;
    private String category;

    @ManyToOne
    @JoinColumn(name="subject_id", nullable=false)
    private Subject subject;

    public int getId() {
        return ymal_id;
    }

    public YmalProduct() {
        super();
    }

    public YmalProduct(
            @JsonProperty("ymal_id") int ymal_id,
            @JsonProperty("name") String name,
            @JsonProperty("designer") String designer,
            @JsonProperty("colour") String colour,
            @JsonProperty("category") String category) {
        this.ymal_id = ymal_id;
        this.name = name;
        this.designer = designer;
        this.colour = colour;
        this.category = category;
    }

    public void setId(int ymal_id) {
        this.ymal_id = ymal_id;
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

    @JsonBackReference
    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    @Override
    public String toString() {
        return "YmalProduct{" +
                "ymal_id=" + ymal_id +
                ", name='" + name + '\'' +
                ", designer='" + designer + '\'' +
                ", colour='" + colour + '\'' +
                ", category='" + category + '\'' +
                '}';
    }
}