package com.comsysto.training.inquiries.services;

import com.comsysto.training.inquiries.domain.BookingInquiry;

public interface InquiryService {
    BookingInquiry findByVin(String vin);
}
