package br.com.diego.sisbrecho.api.core.domain.gateways;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.diego.sisbrecho.api.core.domain.entities.Venda;

public interface VendaGateway {
    Venda createVenda(Venda venda);
    Page<Venda> pesquisarTodos(Pageable pageable);
    void removerVenda(Long id);
    Venda atualizVenda(Long codigo, Venda venda);
    Venda buscarPorId(Long id);
}
