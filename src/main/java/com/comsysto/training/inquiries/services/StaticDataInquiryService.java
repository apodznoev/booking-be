package com.comsysto.training.inquiries.services;

import com.comsysto.training.inquiries.domain.BookingInquiry;
import com.comsysto.training.inquiries.domain.Inquiry;
import com.comsysto.training.inquiries.domain.ServicePackage;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.util.Arrays;

public class StaticDataInquiryService implements InquiryService {
    
    private Inquiry createInquiry() {
        Inquiry inquiry = new Inquiry();
        inquiry.setDate(LocalDateTime.now());
        inquiry.setPrice(new BigDecimal(BigInteger.valueOf(100)).setScale(2, RoundingMode.UP));
        inquiry.setServicePackages(Arrays.asList(createServicePackage()));
        return inquiry;
    }

    private ServicePackage createServicePackage() {
        ServicePackage servicePackage = new ServicePackage();
        servicePackage.setId("1");
        servicePackage.setDescription("Desc");
        servicePackage.setName("Service package 1");
        servicePackage.setPrice(new BigDecimal(BigInteger.valueOf(100)).setScale(2, RoundingMode.UP));
        servicePackage.setParts(Arrays.asList("Part 1"));
        servicePackage.setLabour(Arrays.asList("Labour 1"));

        return servicePackage;
    }

    private BookingInquiry createBookingInquiry() {
        BookingInquiry bookingInquiry = new BookingInquiry();
        bookingInquiry.setPastInquiries(Arrays.asList(createInquiry()));
        bookingInquiry.setServicePackages(Arrays.asList(createServicePackage()));

        return bookingInquiry;
    }

    @Override
    public BookingInquiry findByVin(String vin) {
        return createBookingInquiry();
    }
}
