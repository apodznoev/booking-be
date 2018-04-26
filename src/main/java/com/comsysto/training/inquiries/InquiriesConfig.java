package com.comsysto.training.inquiries;

import com.comsysto.training.inquiries.repositories.InquiryRepository;
import com.comsysto.training.inquiries.repositories.RepositoryInitializer;
import com.comsysto.training.inquiries.repositories.ServicePackageRepository;
import com.comsysto.training.inquiries.services.DefaultInquiryService;
import com.comsysto.training.inquiries.services.InquiryService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories("com.comsysto.training.inquiries.repositories")
public class InquiriesConfig {

    @Bean
    @Profile("production")
    InquiryService inquiryService(InquiryRepository repository,
                                  ServicePackageRepository servicePackageRepository) {
        return new DefaultInquiryService(repository, servicePackageRepository);
    }

    @Bean
    DataSource dataSource() {
        return new EmbeddedDatabaseBuilder().setType(EmbeddedDatabaseType.H2).build();
    }

    @Bean
    JpaVendorAdapter jpaVendorAdapter() {
        HibernateJpaVendorAdapter jpaAdapter = new HibernateJpaVendorAdapter();
        jpaAdapter.setGenerateDdl(true);
        jpaAdapter.setShowSql(true);
        return jpaAdapter;
    }

    @Bean
    LocalContainerEntityManagerFactoryBean entityManagerFactory() {
        LocalContainerEntityManagerFactoryBean entityManagerFactoryBean = new LocalContainerEntityManagerFactoryBean();
        entityManagerFactoryBean.setPackagesToScan("com.comsysto.training.inquiries.repositories.entities");
        entityManagerFactoryBean.setPersistenceUnitName("inquiries");
        entityManagerFactoryBean.setDataSource(dataSource());
        entityManagerFactoryBean.setJpaVendorAdapter(jpaVendorAdapter());
        return entityManagerFactoryBean;
    }

    @Bean
    JpaTransactionManager transactionManager(EntityManagerFactory emf) {
        return new JpaTransactionManager(emf);
    }

    @Bean
    RepositoryInitializer repositoryInitializer(ServicePackageRepository servicePackageRepository) {
        return new RepositoryInitializer(servicePackageRepository);
    }

}
