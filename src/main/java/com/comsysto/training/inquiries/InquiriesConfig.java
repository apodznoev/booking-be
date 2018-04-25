package com.comsysto.training.inquiries;

import com.comsysto.training.inquiries.services.InquiryService;
import com.comsysto.training.inquiries.services.StaticDataInquiryService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class InquiriesConfig {

    @Bean
    InquiryService inquiryService() {
        return new StaticDataInquiryService();
    }
}
