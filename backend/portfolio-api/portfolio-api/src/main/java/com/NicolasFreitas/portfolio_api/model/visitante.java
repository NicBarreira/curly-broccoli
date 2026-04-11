package com.NicolasFreitas.portfolio_api.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "acessos")
public class visitante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String genero;
    private String email;

    @Column(name = "data_visita", insertable = false, updatable = false)
    private LocalDateTime dataVisita;

    // --- GETTERS E SETTERS (Os "encaixes" manuais) ---
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getGenero() { return genero; }
    public void setGenero(String genero) { this.genero = genero; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public LocalDateTime getDataVisita() { return dataVisita; }
    public void setDataVisita(LocalDateTime dataVisita) { this.dataVisita = dataVisita; }
}