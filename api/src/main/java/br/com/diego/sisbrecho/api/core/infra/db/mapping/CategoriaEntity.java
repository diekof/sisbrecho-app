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
@Table(name = "categoria")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoriaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "categoria_id")
    private Long categoriaId;
    
    @Column(name = "categoria_nome")
    private String categoriaNome;   
    
    @Column(name = "categoria_ativo")
    private Integer categoriaAtivo;   
    
    @Column(name = "categoria_inc_em")
    @JsonIgnore
    private LocalDateTime categoriaIncEm;
    
    @Column(name = "categoria_inc_por")
    @JsonIgnore
    private String categoriaIncPor;
    
}
