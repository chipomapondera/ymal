package com.example.demo.ymalProduct;

import com.example.demo.subject.Subject;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name="ymal_product")
public class YmalProduct {

    @Id
    private int ymal_id;

    private int rank;
    private String name;
    private String designer;
    private String colour;
    private String category;

    @CreationTimestamp
    @Column(name="timestamp", nullable = false, insertable = false, columnDefinition="TIMESTAMP default CURRENT_TIMESTAMP")
    private Timestamp timestamp;

    @ManyToOne(cascade=CascadeType.DETACH, fetch=FetchType.LAZY)
    @JoinColumn(name="subject_id", nullable=false)
    private Subject subject;

    public YmalProduct() {
        super();
    }

    public YmalProduct(
            @JsonProperty("ymal_id") int ymal_id,
            @JsonProperty("rank") int rank,
            @JsonProperty("name") String name,
            @JsonProperty("designer") String designer,
            @JsonProperty("colour") String colour,
            @JsonProperty("category") String category,
            @JsonProperty("timestamp") Timestamp timestamp) {
        this.ymal_id = ymal_id;
        this.rank = rank;
        this.name = name;
        this.designer = designer;
        this.colour = colour;
        this.category = category;
        this.timestamp = timestamp;
    }

    public int getId() {
        return ymal_id;
    }

    public void setId(int ymal_id) {
        this.ymal_id = ymal_id;
    }

    public int getRank() {
        return rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
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

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }

    @Override
    public String toString() {
        return "YmalProduct{" +
                "ymal_id=" + ymal_id +
                ", name='" + name + '\'' +
                ", designer='" + designer + '\'' +
                ", colour='" + colour + '\'' +
                ", category='" + category + '\'' +
//                ", timestamp='" + timestamp + '\'' +
                '}';
    }
}