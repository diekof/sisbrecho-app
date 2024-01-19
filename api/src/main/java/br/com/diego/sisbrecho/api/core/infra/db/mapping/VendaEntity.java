package br.com.diego.sisbrecho.api.core.infra.db.mapping;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "venda")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class VendaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "venda_id")
    private Long vendaId;

    @Column(name = "produto_id")
    private Long produtoId;

    @Column(name = "venda_cliente_id")
    private Long vendaClienteId;

    @Column(name = "venda_data")
    private LocalDate vendaData;

    @Column(name = "venda_status")
    private Integer vendaStatus;

    @Column(name = "venda_troca")
    private Boolean vendaTroca;

    @Column(name = "venda_inc_em")
    private LocalDateTime vendaIncEm;

    @Column(name = "venda_inc_por")
    private String vendaIncPor;

    @Column(name = "venda_forma_pagamento")
    private String vendaFormaPagamento;

    @Column(name = "venda_desconto")
    private Double vendaDesconto;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "produto_id", 
    referencedColumnName = "produto_id", insertable = false, updatable = false)
    private ProdutoEntity produto;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "venda_cliente_id",
    referencedColumnName = "cliente_id", insertable = false, updatable = false)
    private ClienteEntity cliente;

}
