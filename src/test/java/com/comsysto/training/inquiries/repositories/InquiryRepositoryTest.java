package com.comsysto.training.inquiries.repositories;

import com.comsysto.training.inquiries.InquiriesConfig;
import com.comsysto.training.inquiries.repositories.entities.Inquiry;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.support.AnnotationConfigContextLoader;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import java.time.Instant;
import java.util.*;

import static org.junit.Assert.*;

@Transactional
@RunWith(SpringRunner.class)
@ContextConfiguration(loader = AnnotationConfigContextLoader.class, classes = InquiriesConfig.class)
public class InquiryRepositoryTest {

    @Autowired
    EntityManager entityManager;

    @Autowired
    InquiryRepository inquiryRepository;
    private UUID uuid;
    private String vin;
    private Inquiry inquiry;

    @Before
    public void setUp() throws Exception {

        Date date = Date.from(Instant.now());
        vin = "abcdefgihzu123456";
        inquiry = new Inquiry(null, vin, date, Collections.emptyList());

        inquiry = entityManager.merge(inquiry);
        entityManager.persist(inquiry);
        entityManager.flush();
        this.uuid = inquiry.getId();
    }

    @Test
    public void findById() {
        Optional<Inquiry> byId = inquiryRepository.findById(uuid);
        assertTrue(byId.isPresent());
        assertEquals(inquiry, byId.get());
    }

    @Test
    public void findByVin() {
        List<Inquiry> byVin = inquiryRepository.findByVin(vin);
        assertEquals(inquiry, byVin.get(0));
    }
}