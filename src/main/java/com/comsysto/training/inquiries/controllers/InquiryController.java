package com.comsysto.training.inquiries.controllers;

import com.comsysto.training.inquiries.domain.BookingInquiry;
import com.comsysto.training.inquiries.services.InquiryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/vin")
public class InquiryController {

    private final InquiryService inquiryService;

    public InquiryController(InquiryService inquiryService) {
        this.inquiryService = inquiryService;
    }

    @GetMapping("/{vin}")
    public BookingInquiry findByVin(@PathVariable String vin) {
        return inquiryService.findByVin(vin);
    }

}
