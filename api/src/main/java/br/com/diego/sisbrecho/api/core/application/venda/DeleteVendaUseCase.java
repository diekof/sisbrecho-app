package br.com.diego.sisbrecho.api.core.application.venda;

import br.com.diego.sisbrecho.api.core.domain.gateways.VendaGateway;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class DeleteVendaUseCase {
    private final VendaGateway vendaGateway;
    public void execute(Long id) {
        vendaGateway.removerVenda(id);
    }
}
