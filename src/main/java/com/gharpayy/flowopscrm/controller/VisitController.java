package com.gharpayy.flowopscrm.controller;

import com.gharpayy.flowopscrm.model.Visit;
import com.gharpayy.flowopscrm.repository.VisitRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/visits")
@CrossOrigin("*")
public class VisitController {

    private final VisitRepository repo;

    public VisitController(VisitRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Visit> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Visit add(@RequestBody Visit visit) {
        return repo.save(visit);
    }
}