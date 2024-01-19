package br.com.diego.sisbrecho.api.core.infra.controllers.venda.dto;

import java.time.LocalDate;

import br.com.diego.sisbrecho.api.core.domain.entities.dominio.StatusVenda;

public record CreateVendaRequest(
        Long produtoId,
    Long vendaClienteId,
    LocalDate vendaData,
    StatusVenda vendaStatus,
    Boolean vendaTroca,
    String vendaFormaPagamento,
    Double vendaDesconto
) {
    
}
