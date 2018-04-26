package com.comsysto.training.inquiries;

import com.comsysto.training.Application;
import com.comsysto.training.inquiries.services.InquiryService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.AnnotationConfigWebContextLoader;
import org.springframework.test.context.web.WebAppConfiguration;

import javax.sql.DataSource;

@RunWith(SpringRunner.class)
@WebAppConfiguration
@ContextConfiguration(
        loader = AnnotationConfigWebContextLoader.class,
        classes = {Application.class})
public class ApplicationTest {

    @Autowired
    private ApplicationContext applicationContext;

    @Autowired
    private DataSource dataSource;

    @Test
    public void testApplicationContext() {
        Assert.assertNotNull(applicationContext);
    }

    @Test
    public void testDataSource() {
        Assert.assertNotNull(dataSource);
    }
}
