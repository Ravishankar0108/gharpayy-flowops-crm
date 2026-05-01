package com.gharpayy.flowopscrm.repository;

import com.gharpayy.flowopscrm.model.Lead;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeadRepository extends JpaRepository<Lead, Long> {
}