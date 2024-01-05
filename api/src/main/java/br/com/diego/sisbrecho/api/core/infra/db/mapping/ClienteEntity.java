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
@Table(name = "cliente")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClienteEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cliente_id")
    private Long clienteId;
    
    @Column(name = "cliente_nome")
    private String clienteNome;   
    
    @Column(name = "cliente_pix")
    private String clientePix;   
    
    @Column(name = "cliente_telefone")
    private String clienteTelefone;   
    
    @Column(name = "cliente_ativo")
    private Integer clienteAtivo;   
    
    @Column(name = "cliente_inc_em")
    @JsonIgnore
    private LocalDateTime clienteIncEm;
    
    @Column(name = "cliente_inc_por")
    @JsonIgnore
    private String clienteIncPor;
}
