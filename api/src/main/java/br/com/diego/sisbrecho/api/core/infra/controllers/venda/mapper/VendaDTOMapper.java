package br.com.diego.sisbrecho.api.core.infra.controllers.venda.mapper;

import br.com.diego.sisbrecho.api.core.domain.entities.Venda;
import br.com.diego.sisbrecho.api.core.infra.controllers.venda.dto.CreateVendaRequest;
import br.com.diego.sisbrecho.api.core.infra.controllers.venda.dto.CreateVendaResponse;

public class VendaDTOMapper {
    public CreateVendaResponse toResponse (Venda venda) {
        return new CreateVendaResponse(
            venda.produtoId(),
            venda.vendaClienteId(),            
            venda.vendaData(),
            venda.vendaStatus(),
            venda.vendaTroca(),
            venda.vendaFormaPagamento(),
            venda.vendaDesconto()
        );
    }
    public Venda toVenda(CreateVendaRequest request) {
        return new Venda(
            request.produtoId(),
            request.vendaClienteId(),
            request.vendaData(),
            request.vendaStatus(),
            request.vendaTroca(),
            request.vendaFormaPagamento(),
            request.vendaDesconto()
        );
    }
}
