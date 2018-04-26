package com.comsysto.training.inquiries.repositories.entities;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;
import java.util.UUID;

@Entity
public class Inquiry {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID id;

    private String vin;

    private Date createDate;

    @ManyToMany()
    @LazyCollection(LazyCollectionOption.FALSE)
    private Collection<ServicePackage> servicePackages;

    @java.beans.ConstructorProperties({"id", "vin", "createDate", "servicePackages"})
    public Inquiry(UUID id, String vin, Date createDate, Collection<ServicePackage> servicePackages) {
        this.id = id;
        this.vin = vin;
        this.createDate = createDate;
        this.servicePackages = servicePackages;
    }

    public Inquiry() {
    }

    public static InquiryBuilder builder() {
        return new InquiryBuilder();
    }

    public UUID getId() {
        return this.id;
    }

    public String getVin() {
        return this.vin;
    }

    public Date getCreateDate() {
        return this.createDate;
    }

    public Collection<ServicePackage> getServicePackages() {
        return this.servicePackages;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public void setServicePackages(Collection<ServicePackage> servicePackages) {
        this.servicePackages = servicePackages;
    }

    public boolean equals(Object o) {
        if (o == this) return true;
        if (!(o instanceof Inquiry)) return false;
        final Inquiry other = (Inquiry) o;
        if (!other.canEqual((Object) this)) return false;
        final Object this$id = this.getId();
        final Object other$id = other.getId();
        if (this$id == null ? other$id != null : !this$id.equals(other$id)) return false;
        final Object this$vin = this.getVin();
        final Object other$vin = other.getVin();
        if (this$vin == null ? other$vin != null : !this$vin.equals(other$vin)) return false;
        final Object this$createDate = this.getCreateDate();
        final Object other$createDate = other.getCreateDate();
        if (this$createDate == null ? other$createDate != null : !this$createDate.equals(other$createDate))
            return false;
        final Object this$servicePackages = this.getServicePackages();
        final Object other$servicePackages = other.getServicePackages();
        if (this$servicePackages == null ? other$servicePackages != null : !this$servicePackages.equals(other$servicePackages))
            return false;
        return true;
    }

    public int hashCode() {
        final int PRIME = 59;
        int result = 1;
        final Object $id = this.getId();
        result = result * PRIME + ($id == null ? 43 : $id.hashCode());
        final Object $vin = this.getVin();
        result = result * PRIME + ($vin == null ? 43 : $vin.hashCode());
        final Object $createDate = this.getCreateDate();
        result = result * PRIME + ($createDate == null ? 43 : $createDate.hashCode());
        final Object $servicePackages = this.getServicePackages();
        result = result * PRIME + ($servicePackages == null ? 43 : $servicePackages.hashCode());
        return result;
    }

    protected boolean canEqual(Object other) {
        return other instanceof Inquiry;
    }

    public String toString() {
        return "Inquiry(id=" + this.getId() + ", vin=" + this.getVin() + ", createDate=" + this.getCreateDate() + ", servicePackages=" + this.getServicePackages() + ")";
    }

    public static class InquiryBuilder {
        private UUID id;
        private String vin;
        private Date createDate;
        private Collection<ServicePackage> servicePackages;

        InquiryBuilder() {
        }

        public Inquiry.InquiryBuilder id(UUID id) {
            this.id = id;
            return this;
        }

        public Inquiry.InquiryBuilder vin(String vin) {
            this.vin = vin;
            return this;
        }

        public Inquiry.InquiryBuilder createDate(Date createDate) {
            this.createDate = createDate;
            return this;
        }

        public Inquiry.InquiryBuilder servicePackages(Collection<ServicePackage> servicePackages) {
            this.servicePackages = servicePackages;
            return this;
        }

        public Inquiry build() {
            return new Inquiry(id, vin, createDate, servicePackages);
        }

        public String toString() {
            return "Inquiry.InquiryBuilder(id=" + this.id + ", vin=" + this.vin + ", createDate=" + this.createDate + ", servicePackages=" + this.servicePackages + ")";
        }
    }
}
