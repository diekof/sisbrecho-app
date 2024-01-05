package br.com.diego.sisbrecho.api.core.infra.db.persistence;

import br.com.diego.sisbrecho.api.core.domain.entities.Produto;
import br.com.diego.sisbrecho.api.core.infra.db.mapping.ProdutoEntity;

public class ProdutoEntityMapper {
     ProdutoEntity toEntity(Produto produtoDomainObj) {
        return new ProdutoEntity(null, 
        produtoDomainObj.produtoNome(),
        produtoDomainObj.produtoSku(),
        produtoDomainObj.produtoDescricao(),
        produtoDomainObj.produtoValorCompra(),
        produtoDomainObj.produtoValorTotal(),
        produtoDomainObj.produtoLucro(),
        produtoDomainObj.produtoPercentual(),
        produtoDomainObj.produtoCor(),
        produtoDomainObj.produtoStatus(),
        produtoDomainObj.produtoIncEm(),
        produtoDomainObj.produtoIncPor(),
        produtoDomainObj.produtoMarcaId(),
        produtoDomainObj.produtoCategoriaId(), 
        null, 
        null
        );
     }

    Produto toDomainObj(ProdutoEntity produtoEntity) {
        return new Produto(
        produtoEntity.getProdutoMarcaId(),
        produtoEntity.getProdutoCategoriaId(),
        produtoEntity.getProdutoSku(),
        produtoEntity.getProdutoNome(),
        produtoEntity.getProdutoDescricao(),
        produtoEntity.getProdutoValorCompra(),
        produtoEntity.getProdutoValorTotal(),
        produtoEntity.getProdutoLucro(),
        produtoEntity.getProdutoPercentual(),
        produtoEntity.getProdutoStatus(),
        produtoEntity.getProdutoCor(),
        produtoEntity.getProdutoIncEm(),
        produtoEntity.getProdutoIncPor()
        );
    }
}
