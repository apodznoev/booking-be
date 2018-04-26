package com.comsysto.training.inquiries.repositories.entities;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Collection;
import java.util.UUID;

@Entity
public class ServicePackage {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID id;

    @Column(precision = 19, scale = 2)
    private BigDecimal price;
    private String name;

    private String description;

    @ElementCollection()
    @CollectionTable(name = "labour", joinColumns = @JoinColumn(name = "pack_id"))
    @Column(name = "labour")
    @LazyCollection(LazyCollectionOption.FALSE)
    private Collection<String> labour;

    @ElementCollection()
    @LazyCollection(LazyCollectionOption.FALSE)

    @CollectionTable(name = "parts", joinColumns = @JoinColumn(name = "pack_id"))
    @Column(name = "part")
    private Collection<String> parts;

    @java.beans.ConstructorProperties({"id", "price", "name", "description", "labour", "parts"})
    public ServicePackage(UUID id, BigDecimal price, String name, String description, Collection<String> labour, Collection<String> parts) {
        this.id = id;
        this.price = price;
        this.name = name;
        this.description = description;
        this.labour = labour;
        this.parts = parts;
    }

    public ServicePackage() {
    }

    public static ServicePackageBuilder builder() {
        return new ServicePackageBuilder();
    }

    public UUID getId() {
        return this.id;
    }

    public BigDecimal getPrice() {
        return this.price;
    }

    public String getName() {
        return this.name;
    }

    public String getDescription() {
        return this.description;
    }

    public Collection<String> getLabour() {
        return this.labour;
    }

    public Collection<String> getParts() {
        return this.parts;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setLabour(Collection<String> labour) {
        this.labour = labour;
    }

    public void setParts(Collection<String> parts) {
        this.parts = parts;
    }

    public boolean equals(Object o) {
        if (o == this) return true;
        if (!(o instanceof ServicePackage)) return false;
        final ServicePackage other = (ServicePackage) o;
        if (!other.canEqual((Object) this)) return false;
        final Object this$id = this.getId();
        final Object other$id = other.getId();
        if (this$id == null ? other$id != null : !this$id.equals(other$id)) return false;
        final Object this$price = this.getPrice();
        final Object other$price = other.getPrice();
        if (this$price == null ? other$price != null : !this$price.equals(other$price)) return false;
        final Object this$name = this.getName();
        final Object other$name = other.getName();
        if (this$name == null ? other$name != null : !this$name.equals(other$name)) return false;
        final Object this$description = this.getDescription();
        final Object other$description = other.getDescription();
        if (this$description == null ? other$description != null : !this$description.equals(other$description))
            return false;
        final Object this$labour = this.getLabour();
        final Object other$labour = other.getLabour();
        if (this$labour == null ? other$labour != null : !this$labour.equals(other$labour)) return false;
        final Object this$parts = this.getParts();
        final Object other$parts = other.getParts();
        if (this$parts == null ? other$parts != null : !this$parts.equals(other$parts)) return false;
        return true;
    }

    public int hashCode() {
        final int PRIME = 59;
        int result = 1;
        final Object $id = this.getId();
        result = result * PRIME + ($id == null ? 43 : $id.hashCode());
        final Object $price = this.getPrice();
        result = result * PRIME + ($price == null ? 43 : $price.hashCode());
        final Object $name = this.getName();
        result = result * PRIME + ($name == null ? 43 : $name.hashCode());
        final Object $description = this.getDescription();
        result = result * PRIME + ($description == null ? 43 : $description.hashCode());
        final Object $labour = this.getLabour();
        result = result * PRIME + ($labour == null ? 43 : $labour.hashCode());
        final Object $parts = this.getParts();
        result = result * PRIME + ($parts == null ? 43 : $parts.hashCode());
        return result;
    }

    protected boolean canEqual(Object other) {
        return other instanceof ServicePackage;
    }

    public String toString() {
        return "ServicePackage(id=" + this.getId() + ", price=" + this.getPrice() + ", name=" + this.getName() + ", description=" + this.getDescription() + ", labour=" + this.getLabour() + ", parts=" + this.getParts() + ")";
    }

    public static class ServicePackageBuilder {
        private UUID id;
        private BigDecimal price;
        private String name;
        private String description;
        private Collection<String> labour;
        private Collection<String> parts;

        ServicePackageBuilder() {
        }

        public ServicePackage.ServicePackageBuilder id(UUID id) {
            this.id = id;
            return this;
        }

        public ServicePackage.ServicePackageBuilder price(BigDecimal price) {
            this.price = price;
            return this;
        }

        public ServicePackage.ServicePackageBuilder name(String name) {
            this.name = name;
            return this;
        }

        public ServicePackage.ServicePackageBuilder description(String description) {
            this.description = description;
            return this;
        }

        public ServicePackage.ServicePackageBuilder labour(Collection<String> labour) {
            this.labour = labour;
            return this;
        }

        public ServicePackage.ServicePackageBuilder parts(Collection<String> parts) {
            this.parts = parts;
            return this;
        }

        public ServicePackage build() {
            return new ServicePackage(id, price, name, description, labour, parts);
        }

        public String toString() {
            return "ServicePackage.ServicePackageBuilder(id=" + this.id + ", price=" + this.price + ", name=" + this.name + ", description=" + this.description + ", labour=" + this.labour + ", parts=" + this.parts + ")";
        }
    }

}