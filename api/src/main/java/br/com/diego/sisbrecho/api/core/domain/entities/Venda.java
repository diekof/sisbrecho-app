package br.com.diego.sisbrecho.api.core.domain.entities;

import java.time.LocalDate;

import br.com.diego.sisbrecho.api.core.domain.entities.dominio.StatusVenda;

public record Venda(
    Long produtoId,
    Long vendaClienteId,
    LocalDate vendaData,
    StatusVenda vendaStatus,
    Boolean vendaTroca,
    String vendaFormaPagamento,
    Double vendaDesconto
) {
} 
