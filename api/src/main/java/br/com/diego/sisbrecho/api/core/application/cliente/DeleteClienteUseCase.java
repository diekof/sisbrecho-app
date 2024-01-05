package br.com.diego.sisbrecho.api.core.application.cliente;

import br.com.diego.sisbrecho.api.core.domain.gateways.ClienteGateway;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class DeleteClienteUseCase {
    private final ClienteGateway clienteGateway;
    public void execute(Long id) {
        clienteGateway.removerCliente(id);
    }
}
