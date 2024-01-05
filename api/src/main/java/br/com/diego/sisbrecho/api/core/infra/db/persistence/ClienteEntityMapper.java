package br.com.diego.sisbrecho.api.core.infra.db.persistence;

import java.time.LocalDateTime;

import br.com.diego.sisbrecho.api.core.domain.entities.Cliente;
import br.com.diego.sisbrecho.api.core.infra.db.mapping.ClienteEntity;

public class ClienteEntityMapper {

    ClienteEntity toEntity(Cliente clienteDomainObj) {
        return new ClienteEntity(null, 
        clienteDomainObj.clienteNome(),
        clienteDomainObj.clienteTelefone(),
        clienteDomainObj.clientePix(),
        1,
        LocalDateTime.now(),
        "api"
        );
    }

    Cliente toDomainObj(ClienteEntity clienteEntity) {
        return new Cliente(clienteEntity.getClienteNome(),
        clienteEntity.getClienteTelefone(),
        clienteEntity.getClientePix()
        );
    }
    
}
