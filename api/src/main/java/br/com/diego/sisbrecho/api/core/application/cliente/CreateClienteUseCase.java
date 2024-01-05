package br.com.diego.sisbrecho.api.core.application.cliente;

import br.com.diego.sisbrecho.api.core.domain.entities.Cliente;
import br.com.diego.sisbrecho.api.core.domain.gateways.ClienteGateway;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class CreateClienteUseCase {
    private final ClienteGateway clienteGateway;

    public Cliente execute(Cliente cliente) {
        return clienteGateway.createCliente(cliente);
    }
    
}
