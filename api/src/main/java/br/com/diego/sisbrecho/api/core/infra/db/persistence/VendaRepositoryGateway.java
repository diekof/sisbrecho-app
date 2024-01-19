package br.com.diego.sisbrecho.api.core.infra.db.persistence;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.diego.sisbrecho.api.core.domain.entities.Venda;
import br.com.diego.sisbrecho.api.core.domain.gateways.VendaGateway;

public class VendaRepositoryGateway implements VendaGateway{

    private final VendaEntityMapper vendaEntityMapper;
    private final VendaRepository vendaRepository;

    public VendaRepositoryGateway(VendaEntityMapper vendaEntityMapper, 
            VendaRepository vendaRepository) {
        this.vendaEntityMapper = vendaEntityMapper;
        this.vendaRepository = vendaRepository;
    }

    @Override
    public Venda createVenda(Venda venda) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'createVenda'");
    }

    @Override
    public Page<Venda> pesquisarTodos(Pageable pageable) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'pesquisarTodos'");
    }

    @Override
    public void removerVenda(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'removerVenda'");
    }

    @Override
    public Venda atualizVenda(Long codigo, Venda venda) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'atualizVenda'");
    }

    @Override
    public Venda buscarPorId(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'buscarPorId'");
    }
    
}
