package br.com.diego.sisbrecho.api.core.application.produto;

import br.com.diego.sisbrecho.api.core.domain.entities.Produto;
import br.com.diego.sisbrecho.api.core.domain.gateways.ProdutoGateway;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class CreateProdutoUseCase {
    private final ProdutoGateway produtoGateway;
    public Produto execute(Produto produto) {
        return produtoGateway.createProduto(produto);
    }
}
