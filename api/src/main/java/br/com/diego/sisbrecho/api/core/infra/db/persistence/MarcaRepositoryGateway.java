package br.com.diego.sisbrecho.api.core.infra.db.persistence;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.diego.sisbrecho.api.core.domain.entities.Marca;
import br.com.diego.sisbrecho.api.core.domain.gateways.MarcaGateway;

public class MarcaRepositoryGateway implements MarcaGateway{

    private final MarcaEntityMapper marcaEntityMapper;
    private final MarcaRepository marcaRepository;

    public MarcaRepositoryGateway(MarcaEntityMapper marcaEntityMapper, 
            MarcaRepository marcaRepository) {
        this.marcaEntityMapper = marcaEntityMapper;
        this.marcaRepository = marcaRepository;
    }

    @Override
    public Marca createMarca(Marca marca) {
        var marcaEntity = marcaEntityMapper.toEntity(marca);
        var marcaEntitySaved = marcaRepository.save(marcaEntity);
        return marcaEntityMapper.toDomainObj(marcaEntitySaved);
    }

    @Override
    public Marca atualizMarca(Long codigo, Marca marca) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'atualizMarca'");
    }

    @Override
    public void removerMarca(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'removerMarca'");
    }

    @Override
    public Marca buscarPorId(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'buscarPorId'");
    }

    @Override
    public Page<Marca> pesquisarTodos(Pageable pageable) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'pesquisarTodos'");
    }
    
}
