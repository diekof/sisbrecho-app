package br.com.diego.sisbrecho.api.core.infra.db.persistence;

import br.com.diego.sisbrecho.api.core.domain.gateways.CategoriaGateway;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.diego.sisbrecho.api.core.domain.entities.Categoria;

public class CategoriaRepositoryGateway implements CategoriaGateway {

    private final CategoriaEntityMapper categoriaEntityMapper;
    private final CategoriaRepository categoriaRepository;

    public CategoriaRepositoryGateway(CategoriaEntityMapper categoriaEntityMapper,
            CategoriaRepository categoriaRepository) {
        this.categoriaEntityMapper = categoriaEntityMapper;
        this.categoriaRepository = categoriaRepository;
    }

    @Override
    public Categoria createCategoria(Categoria categoria) {
        var categoriaEntity = categoriaEntityMapper.toEntity(categoria);
        var categoriaEntitySaved = categoriaRepository.save(categoriaEntity);
        return categoriaEntityMapper.toDomainObj(categoriaEntitySaved);
    }

    @Override
    public Page<Categoria> pesquisarTodos(Pageable pageable) {
        // Pageable pageable2 = PageableConverter.convertToPageable(pageable);
        var categoria =  categoriaRepository.findAll(pageable);
        return categoria.map(categoriaEntityMapper::toDomainObj);
        //categoria.map(categoriaEntityMapper::toDomainObj).getContent();
        //categoria.map(categoriaEntityMapper::toDomainObj);
    }

    @Override
    public void removerCategoria(Long id) {
        categoriaRepository.deleteById(id);
    }

    @Override
    public Categoria atualizCategoria(Long codigo, Categoria categoria) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'atualizCategoria'");
    }

    @Override
    public Categoria buscarPorId(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'buscarPorId'");
    }
    
}
