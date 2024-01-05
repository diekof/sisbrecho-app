package br.com.diego.sisbrecho.api.core.domain.gateways;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.diego.sisbrecho.api.core.domain.entities.Produto;

public interface ProdutoGateway {
    Produto createProduto(Produto produto);
    Produto atualizProduto(Long codigo, Produto produto);
    void removerProduto(Long id);
    Produto buscarPorId(Long id);
    Page<Produto> pesquisarTodos(Pageable pageable);
}
