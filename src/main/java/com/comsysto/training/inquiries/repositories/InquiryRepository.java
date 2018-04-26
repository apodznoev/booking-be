package com.comsysto.training.inquiries.repositories;

import com.comsysto.training.inquiries.repositories.entities.Inquiry;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface InquiryRepository extends JpaRepository<Inquiry, UUID> {

    List<Inquiry> findByVin(String vin);
}
