package com.comsysto.training.inquiries.services;

import com.comsysto.training.inquiries.domain.BookingInquiry;
import com.comsysto.training.inquiries.repositories.InquiryRepository;
import com.comsysto.training.inquiries.repositories.ServicePackageRepository;
import com.comsysto.training.inquiries.repositories.entities.Inquiry;
import com.comsysto.training.inquiries.repositories.entities.ServicePackage;

import javax.persistence.criteria.CriteriaBuilder;
import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.function.Function;
import java.util.stream.Collectors;

public class DefaultInquiryService implements InquiryService {

    private final InquiryRepository inquiryRepository;
    private ServicePackageRepository servicePackRepository;

    public DefaultInquiryService(InquiryRepository repository,
                                 ServicePackageRepository servicePackRepository) {
        this.inquiryRepository = repository;
        this.servicePackRepository = servicePackRepository;
    }

    @Override
    public BookingInquiry findByVin(String vin) {
        List<Inquiry> inquiries = inquiryRepository.findByVin(vin);
        List<ServicePackage> servicePackages = servicePackRepository.findAll();

        BookingInquiry bookingInquiry = new BookingInquiry();
        bookingInquiry.setPastInquiries(inquiries);
        bookingInquiry.setServicePackages(servicePackages);

        return bookingInquiry;
    }

    @Override
    public Inquiry createInquiry(String vin, List<String> servicePackageIds) {
        List<ServicePackage> servicePackages = servicePackRepository.findAllById(
                servicePackageIds.stream().map(UUID::fromString).collect(Collectors.toList())
        );

        Inquiry newInquiry = Inquiry.builder()
                .createDate(Date.from(Instant.now()))
                .servicePackages(servicePackages)
                .vin(vin)
                .build();

        return inquiryRepository.save(newInquiry);
    }
}
