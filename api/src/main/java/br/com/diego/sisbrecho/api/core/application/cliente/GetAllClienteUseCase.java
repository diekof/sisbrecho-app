package br.com.diego.sisbrecho.api.core.application.cliente;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.diego.sisbrecho.api.core.domain.entities.Cliente;
import br.com.diego.sisbrecho.api.core.domain.gateways.ClienteGateway;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class GetAllClienteUseCase {
    private final ClienteGateway clienteGateway;
    public Page<Cliente> execute(Pageable pageable) {
        return clienteGateway.pesquisarTodos(pageable);
    }
}
