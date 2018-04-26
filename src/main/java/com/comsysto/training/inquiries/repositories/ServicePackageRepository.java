package com.comsysto.training.inquiries.repositories;

import com.comsysto.training.inquiries.repositories.entities.ServicePackage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ServicePackageRepository extends JpaRepository<ServicePackage, UUID> {

}
