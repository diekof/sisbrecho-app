package br.com.diego.sisbrecho.api.core.infra.db.persistence;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.diego.sisbrecho.api.core.domain.entities.Produto;
import br.com.diego.sisbrecho.api.core.domain.gateways.ProdutoGateway;

public class ProdutoRepositoryGateway implements ProdutoGateway {

    private final ProdutoEntityMapper produtoEntityMapper;
    private final ProdutoRepository produtoRepository;

    public ProdutoRepositoryGateway(ProdutoEntityMapper produtoEntityMapper, 
            ProdutoRepository produtoRepository) {
        this.produtoEntityMapper = produtoEntityMapper;
        this.produtoRepository = produtoRepository;
    }

    @Override
    public Produto createProduto(Produto produto) {
        var produtoEntity = produtoEntityMapper.toEntity(produto);
        var produtoEntitySaved = produtoRepository.save(produtoEntity);
        return produtoEntityMapper.toDomainObj(produtoEntitySaved);
    }

    @Override
    public Produto atualizProduto(Long codigo, Produto produto) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'atualizProduto'");
    }

    @Override
    public void removerProduto(Long id) {
       produtoRepository.deleteById(id);
    }

    @Override
    public Produto buscarPorId(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'buscarPorId'");
    }

    @Override
    public Page<Produto> pesquisarTodos(Pageable pageable) {
       var produto =  produtoRepository.findAll(pageable);
         return produto.map(produtoEntityMapper::toDomainObj);
    }
    
}
