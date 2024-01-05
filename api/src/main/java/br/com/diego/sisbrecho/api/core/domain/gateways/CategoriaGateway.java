package br.com.diego.sisbrecho.api.core.domain.gateways;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import br.com.diego.sisbrecho.api.core.domain.entities.Categoria;

public interface CategoriaGateway {
    Categoria createCategoria(Categoria categoria);
    Page<Categoria> pesquisarTodos(Pageable pageable);
    void removerCategoria(Long id);
    Categoria atualizCategoria(Long codigo, Categoria categoria);
    Categoria buscarPorId(Long id);
}
