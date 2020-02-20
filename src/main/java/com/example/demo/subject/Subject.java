package com.example.demo.subject;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Subject {

    @Id
    private int id;
    private String name;
    private String designer;
    private String colour;
    private String category;

    public Subject() {
        super();
    }

    public Subject(
            @JsonProperty("id") int id,
            @JsonProperty("name") String name,
            @JsonProperty("designer") String designer,
            @JsonProperty("colour") String colour,
            @JsonProperty("category") String category) {
        this.id = id;
        this.name = name;
        this.designer = designer;
        this.colour = colour;
        this.category = category;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    @Override
    public String toString() {
        return "Subject{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", designer='" + designer + '\'' +
                ", colour='" + colour + '\'' +
                ", category='" + category + '\'' +
                '}';
    }
}
