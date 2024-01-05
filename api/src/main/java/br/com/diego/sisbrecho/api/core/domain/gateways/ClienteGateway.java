package br.com.diego.sisbrecho.api.core.domain.gateways;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.diego.sisbrecho.api.core.domain.entities.Cliente;

public interface ClienteGateway {
    Cliente createCliente(Cliente cliente);
    Cliente atualizCliente(Long codigo, Cliente cliente);
    void removerCliente(Long id);
    Cliente buscarPorId(Long id);
    Page<Cliente> pesquisarTodos(Pageable pageable);
}
