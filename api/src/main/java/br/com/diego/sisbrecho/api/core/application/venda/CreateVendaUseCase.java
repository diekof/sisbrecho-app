package br.com.diego.sisbrecho.api.core.application.venda;

import br.com.diego.sisbrecho.api.core.domain.entities.Venda;
import br.com.diego.sisbrecho.api.core.domain.gateways.VendaGateway;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class CreateVendaUseCase {
    private final VendaGateway vendaGateway;
    public Venda execute(Venda venda) {
        return vendaGateway.createVenda(venda);
    }
}
