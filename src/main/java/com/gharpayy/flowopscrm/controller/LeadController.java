package com.gharpayy.flowopscrm.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gharpayy.flowopscrm.model.Lead;
import com.gharpayy.flowopscrm.repository.LeadRepository;

@RestController
@RequestMapping("/api/leads")
@CrossOrigin("*")
public class LeadController {

    private final LeadRepository repo;

    public LeadController(LeadRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Lead> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Lead add(@RequestBody Lead lead) {
        if (lead.getStatus() == null || lead.getStatus().isBlank()) {
            lead.setStatus("New");
        }
        return repo.save(lead);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repo.deleteById(id);
    }
}