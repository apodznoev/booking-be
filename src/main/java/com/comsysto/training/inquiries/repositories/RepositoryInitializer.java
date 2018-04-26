package com.comsysto.training.inquiries.repositories;

import com.comsysto.training.inquiries.repositories.entities.ServicePackage;

import javax.annotation.PostConstruct;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Arrays;
import java.util.UUID;

public class RepositoryInitializer {

    private final ServicePackageRepository servicePackageRepository;

    public RepositoryInitializer(ServicePackageRepository servicePackageRepository) {
        this.servicePackageRepository = servicePackageRepository;
    }

    @PostConstruct
    public void init() {
        servicePackageRepository.saveAll(Arrays.asList(
                ServicePackage.builder()
                        .id(UUID.fromString("BA11BD2E-5745-4CFA-8708-D22B285DB466"))
                        .name("Summer package")
                        .description("Mechanical repairs")
                        .labour(Arrays.asList("Oil replacement", "Replace filters"))
                        .parts(Arrays.asList("1 liter oil", "Tires"))
                        .price(new BigDecimal(1000).setScale(2, RoundingMode.UP))
                        .build()
        ));
    }

}
