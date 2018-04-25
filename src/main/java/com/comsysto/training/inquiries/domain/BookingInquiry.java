package com.comsysto.training.inquiries.domain;

import java.util.List;

public class BookingInquiry {
    private List<ServicePackage> servicePackages;
    private List<Inquiry> pastInquiries;

    public List<ServicePackage> getServicePackages() {
        return servicePackages;
    }

    public void setServicePackages(List<ServicePackage> servicePackages) {
        this.servicePackages = servicePackages;
    }

    public List<Inquiry> getPastInquiries() {
        return pastInquiries;
    }

    public void setPastInquiries(List<Inquiry> pastInquiries) {
        this.pastInquiries = pastInquiries;
    }
}
