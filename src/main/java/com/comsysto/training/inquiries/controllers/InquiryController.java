package com.comsysto.training.inquiries.controllers;

import com.comsysto.training.inquiries.domain.BookingInquiry;
import com.comsysto.training.inquiries.services.InquiryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class InquiryController {

    private final InquiryService inquiryService;

    public InquiryController(InquiryService inquiryService) {
        this.inquiryService = inquiryService;
    }

    @GetMapping("/vin/{vin}")
    public BookingInquiry findByVin(@PathVariable String vin) {
        return inquiryService.findByVin(vin);
    }

    @PostMapping("/inquiries/{vin}")
    public ResponseEntity save(@PathVariable String vin,
                               @RequestBody List<Map<String, String>> id) {

        List<String> ids = id.stream()
                .map(i -> i.get("id"))
                .collect(Collectors.toList());

        inquiryService.createInquiry(vin, ids);
        return ResponseEntity.created(
                ServletUriComponentsBuilder.fromCurrentRequestUri()
                        .build()
                        .toUri())
                .build();
    }


}
