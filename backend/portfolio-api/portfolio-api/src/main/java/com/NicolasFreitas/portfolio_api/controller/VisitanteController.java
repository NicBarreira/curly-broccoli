package com.NicolasFreitas.portfolio_api.controller;

import com.NicolasFreitas.portfolio_api.model.visitante;
import com.NicolasFreitas.portfolio_api.repository.VisitanteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/visitantes")
@CrossOrigin("*") // Libera para o seu HTML acessar sem erro de segurança (CORS)
public class VisitanteController {

    @Autowired
    private VisitanteRepository repository;

    @PostMapping
    public visitante salvar(@RequestBody visitante visitante) {
        return repository.save(visitante);
    }
}