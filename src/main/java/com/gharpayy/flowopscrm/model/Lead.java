package com.gharpayy.flowopscrm.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Lead {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String phone;
    private String status;

    private String location;
    private String budget;
    private String temperature;
    private String assignedTo;

    public Long getId() { return id; }

    public String getName() { return name; }
    public String getPhone() { return phone; }
    public String getStatus() { return status; }
    public String getLocation() { return location; }
    public String getBudget() { return budget; }
    public String getTemperature() { return temperature; }
    public String getAssignedTo() { return assignedTo; }

    public void setId(Long id) { this.id = id; }

    public void setName(String name) { this.name = name; }
    public void setPhone(String phone) { this.phone = phone; }
    public void setStatus(String status) { this.status = status; }
    public void setLocation(String location) { this.location = location; }
    public void setBudget(String budget) { this.budget = budget; }
    public void setTemperature(String temperature) { this.temperature = temperature; }
    public void setAssignedTo(String assignedTo) { this.assignedTo = assignedTo; }
}