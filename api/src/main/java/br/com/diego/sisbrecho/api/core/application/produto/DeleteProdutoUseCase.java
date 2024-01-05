package br.com.diego.sisbrecho.api.core.application.produto;

import br.com.diego.sisbrecho.api.core.domain.gateways.ProdutoGateway;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class DeleteProdutoUseCase {
    private final ProdutoGateway produtoGateway;
    public void execute(Long id) {
        produtoGateway.removerProduto(id);
    }
}
