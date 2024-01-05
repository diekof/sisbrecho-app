package br.com.diego.sisbrecho.api.main;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import br.com.diego.sisbrecho.api.core.application.cliente.CreateClienteUseCase;
import br.com.diego.sisbrecho.api.core.application.cliente.DeleteClienteUseCase;
import br.com.diego.sisbrecho.api.core.application.cliente.GetAllClienteUseCase;
import br.com.diego.sisbrecho.api.core.domain.gateways.ClienteGateway;
import br.com.diego.sisbrecho.api.core.infra.controllers.cliente.mapper.ClienteDTOMapper;
import br.com.diego.sisbrecho.api.core.infra.db.persistence.ClienteEntityMapper;
import br.com.diego.sisbrecho.api.core.infra.db.persistence.ClienteRepository;
import br.com.diego.sisbrecho.api.core.infra.db.persistence.ClienteRepositoryGateway;

@Configuration
public class ClienteConfig {

    @Bean
    GetAllClienteUseCase getAllClienteUseCase(ClienteGateway clienteGateway) {
        return new GetAllClienteUseCase(clienteGateway);
    }
    @Bean
    CreateClienteUseCase createClienteUseCase(ClienteGateway clienteGateway) {
        return new CreateClienteUseCase(clienteGateway);
    }
    @Bean
    DeleteClienteUseCase deleteClienteUseCase(ClienteGateway clienteGateway) {
        return new DeleteClienteUseCase(clienteGateway);
    }
    @Bean
    ClienteGateway clienteGateway(ClienteRepository clienteRepository, ClienteEntityMapper clienteEntityMapper) {
        return new ClienteRepositoryGateway(clienteEntityMapper,clienteRepository);
    }
    @Bean
    ClienteEntityMapper clienteEntityMapper() {
        return new ClienteEntityMapper();
    }
    @Bean
    ClienteDTOMapper clienteDTOMapper() {
        return new ClienteDTOMapper();
    }
    
}
