package com.gharpayy.flowopscrm.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Visit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String leadName;
    private String propertyName;
    private String visitDate;
    private String visitTime;

    public Long getId() { return id; }

    public String getLeadName() { return leadName; }
    public String getPropertyName() { return propertyName; }
    public String getVisitDate() { return visitDate; }
    public String getVisitTime() { return visitTime; }

    public void setLeadName(String leadName) { this.leadName = leadName; }
    public void setPropertyName(String propertyName) { this.propertyName = propertyName; }
    public void setVisitDate(String visitDate) { this.visitDate = visitDate; }
    public void setVisitTime(String visitTime) { this.visitTime = visitTime; }
}