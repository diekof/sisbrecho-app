package br.com.diego.sisbrecho.api.core.infra.controllers.cliente.mapper;

import br.com.diego.sisbrecho.api.core.domain.entities.Cliente;
import br.com.diego.sisbrecho.api.core.infra.controllers.cliente.dto.CreateClienteRequest;
import br.com.diego.sisbrecho.api.core.infra.controllers.cliente.dto.CreateClienteResponse;

public class ClienteDTOMapper {
    public CreateClienteResponse toResponse(Cliente cliente) {
        return new CreateClienteResponse(cliente.clienteNome(), cliente.clientePix(), cliente.clienteTelefone());
    }
    public Cliente toCliente(CreateClienteRequest request) {
        return new Cliente(request.clienteNome(), request.clientePix(), request.clienteTelefone());
    }
}
