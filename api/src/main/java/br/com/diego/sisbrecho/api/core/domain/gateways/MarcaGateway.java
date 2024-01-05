package br.com.diego.sisbrecho.api.core.domain.gateways;

import java.util.List;

import br.com.diego.sisbrecho.api.core.domain.entities.Marca;

public interface MarcaGateway {
    Marca createMarca(Marca marca);
    Marca atualizMarca(Long codigo, Marca marca);
    void removerMarca(Long id);
    Marca buscarPorId(Long id);
    List<Marca> pesquisarTodos(CustomPageRequest pageable);
}
