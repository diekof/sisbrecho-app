package br.com.diego.sisbrecho.api.core.infra.db.mapping;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "marca")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MarcaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "marca_id")
    private Long marcaId;
    
    @Column(name = "marca_nome")
    private String marcaNome;   

    @Column(name = "marca_descricao")
    private String marcaDescricao;
    
    @Column(name = "marca_ativo")
    private Integer marcaAtivo;   
    
    @Column(name = "marca_inc_em")
    @JsonIgnore
    private LocalDateTime marcaIncEm;
    
    @Column(name = "marca_inc_por")
    @JsonIgnore
    private String marcaIncPor;
    
}
