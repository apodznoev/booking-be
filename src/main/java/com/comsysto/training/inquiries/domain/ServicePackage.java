package com.comsysto.training.inquiries.domain;

import java.math.BigDecimal;
import java.util.List;

public class ServicePackage {

    private String id;
    private String name;
    private BigDecimal price;
    private String description;
    private List<String> parts;
    private List<String> labour;


    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setParts(List<String> parts) {
        this.parts = parts;
    }

    public void setLabour(List<String> labour) {
        this.labour = labour;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public String getDescription() {
        return description;
    }

    public List<String> getParts() {
        return parts;
    }

    public List<String> getLabour() {
        return labour;
    }
}
