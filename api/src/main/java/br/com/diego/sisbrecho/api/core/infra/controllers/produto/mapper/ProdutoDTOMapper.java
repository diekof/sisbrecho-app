package br.com.diego.sisbrecho.api.core.infra.controllers.produto.mapper;

import br.com.diego.sisbrecho.api.core.domain.entities.Produto;
import br.com.diego.sisbrecho.api.core.infra.controllers.produto.dto.CreateProdutoRequest;
import br.com.diego.sisbrecho.api.core.infra.controllers.produto.dto.CreateProdutoResponse;

public class ProdutoDTOMapper {
    public CreateProdutoResponse toResponse (Produto produto) {
        return new CreateProdutoResponse(
            produto.produtoSku(),
            produto.produtoNome(),
            produto.produtoDescricao(),
            produto.produtoValorCompra(),
            produto.produtoValorTotal(),
            produto.produtoLucro(),
            produto.produtoPercentual(),
            produto.produtoStatus(),
            produto.produtoCor(),
            produto.produtoIncEm(),
            produto.produtoIncPor()
        );
    }
    public Produto toProduto(CreateProdutoRequest request) {
        return new Produto(
            request.produtoCategoriaId(),
            request.produtoMarcaId(),
            request.produtoSku(),
            request.produtoNome(),
            request.produtoDescricao(),
            request.produtoValorCompra(),
            request.produtoValorTotal(),
            request.produtoLucro(),
            request.produtoPercentual(),
            request.produtoStatus(),
            request.produtoCor(),
            request.produtoIncEm(),
            request.produtoIncPor()
        );
    }
}
