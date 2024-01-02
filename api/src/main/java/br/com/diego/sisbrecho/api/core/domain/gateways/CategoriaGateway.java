package br.com.diego.sisbrecho.api.core.domain.gateways;

import java.util.List;

import br.com.diego.sisbrecho.api.core.domain.entities.Categoria;

public interface CategoriaGateway {
    Categoria createCategoria(Categoria categoria);
    List<Categoria> pesquisarTodos(CustomPageRequest pageable);
    void removerCategoria(Long id);
    Categoria atualizCategoria(Long codigo, Categoria categoria);
    Categoria buscarPorId(Long id);
}
