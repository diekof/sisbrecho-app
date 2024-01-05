package br.com.diego.sisbrecho.api.core.infra.db.persistence;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.diego.sisbrecho.api.core.domain.entities.Cliente;
import br.com.diego.sisbrecho.api.core.domain.gateways.ClienteGateway;

public class ClienteRepositoryGateway implements ClienteGateway{

    private final ClienteEntityMapper clienteEntityMapper;
    private final ClienteRepository clienteRepository;

    public ClienteRepositoryGateway(ClienteEntityMapper clienteEntityMapper, ClienteRepository clienteRepository) {
        this.clienteEntityMapper = clienteEntityMapper;
        this.clienteRepository = clienteRepository;
    }

    @Override
    public Cliente createCliente(Cliente cliente) {
        var clienteEntity = clienteEntityMapper.toEntity(cliente);
        var clienteEntitySaved = clienteRepository.save(clienteEntity);
        return clienteEntityMapper.toDomainObj(clienteEntitySaved);
    }

    @Override
    public Cliente atualizCliente(Long codigo, Cliente cliente) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'atualizCliente'");
    }

    @Override
    public void removerCliente(Long id) {
        clienteRepository.deleteById(id);
    }

    @Override
    public Cliente buscarPorId(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'buscarPorId'");
    }

    @Override
    public Page<Cliente> pesquisarTodos(Pageable pageable) {
        var cliente =  clienteRepository.findAll(pageable);
        return cliente.map(clienteEntityMapper::toDomainObj);
    }
    
}
