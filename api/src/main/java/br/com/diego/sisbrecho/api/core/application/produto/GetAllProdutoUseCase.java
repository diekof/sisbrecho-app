package br.com.diego.sisbrecho.api.core.application.produto;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.diego.sisbrecho.api.core.domain.entities.Produto;
import br.com.diego.sisbrecho.api.core.domain.gateways.CustomPageRequest;
import br.com.diego.sisbrecho.api.core.domain.gateways.ProdutoGateway;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class GetAllProdutoUseCase {
    private final ProdutoGateway produtoGateway;
    public Page<Produto> execute(Pageable pageable) {
        return produtoGateway.pesquisarTodos(pageable);
    }
}
