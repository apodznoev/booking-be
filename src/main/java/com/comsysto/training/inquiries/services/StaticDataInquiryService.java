package com.comsysto.training.inquiries.services;

import com.comsysto.training.inquiries.domain.BookingInquiry;
import com.comsysto.training.inquiries.repositories.entities.Inquiry;
import com.comsysto.training.inquiries.repositories.entities.ServicePackage;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.math.RoundingMode;
import java.sql.Date;
import java.time.Instant;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

public class StaticDataInquiryService implements InquiryService {
    
    private Inquiry createInquiry() {
        Inquiry inquiry = new Inquiry();
        inquiry.setCreateDate(Date.from(Instant.now()));
        inquiry.setServicePackages(Arrays.asList(createServicePackage()));
        return inquiry;
    }

    private ServicePackage createServicePackage() {
        ServicePackage servicePackage = new ServicePackage();
        servicePackage.setId(UUID.randomUUID());
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
    public Inquiry createInquiry(String vin, List<String> servicePackageIds) {
        return null;
    }

    @Override
    public BookingInquiry findByVin(String vin) {
        return createBookingInquiry();
    }
}
