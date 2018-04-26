package com.comsysto.training.inquiries.services;

import com.comsysto.training.inquiries.domain.BookingInquiry;
import com.comsysto.training.inquiries.repositories.entities.Inquiry;

import java.util.List;

public interface InquiryService {
    BookingInquiry findByVin(String vin);

    Inquiry createInquiry(String vin, List<String> servicePackageIds);
}
