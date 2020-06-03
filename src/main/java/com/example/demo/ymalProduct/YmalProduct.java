package com.example.demo.ymalProduct;

import com.example.demo.subject.Subject;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name="ymal_product")
public class YmalProduct {

    @Id
    private int id;
    private int ymal_id;
    private int rank;
    private String name;
    private String designer;
    private String colour;
    private String category;
    private Integer versionId;
    private String versionAction;


    @ManyToOne(cascade=CascadeType.PERSIST, fetch=FetchType.LAZY)
    @JoinColumn(name="subject_id", nullable=false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Subject subject;

    @CreationTimestamp
    @Column(name="timestamp", nullable = false, insertable = false, columnDefinition="TIMESTAMP default CURRENT_TIMESTAMP")
    private Timestamp timestamp;

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

    public int getSubjectId() {
        return subject.getId();
    }

//    @JsonBackReference
    @JsonIgnore
    public Subject getSubject() {
        return subject;
    }

    @JsonIgnore
    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }

    public Integer getVersionId() {
        return versionId;
    }

    public void setVersionId(Integer versionId) {
        this.versionId = versionId;
    }

    public String getVersionAction() {
        return versionAction;
    }

    public void setVersionAction(String versionAction) {
        this.versionAction = versionAction;
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