package br.com.diego.sisbrecho.api.core.application.venda;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.diego.sisbrecho.api.core.domain.entities.Venda;
import br.com.diego.sisbrecho.api.core.domain.gateways.VendaGateway;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class GetAllVendaUseCase {
    private final VendaGateway vendaGateway;
    public Page<Venda> execute(Pageable pageable) {
        return vendaGateway.pesquisarTodos(pageable);
    }
}
