package com.NicolasFreitas.portfolio_api.repository;

import com.NicolasFreitas.portfolio_api.model.visitante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VisitanteRepository extends JpaRepository<visitante, Long> {
    // Aqui o Spring já te entrega os métodos save, findAll, etc. prontos
}