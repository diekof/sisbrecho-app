package br.com.diego.sisbrecho.api.core.domain.gateways;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.diego.sisbrecho.api.core.domain.entities.Marca;

public interface MarcaGateway {
    Marca createMarca(Marca marca);
    Marca atualizMarca(Long codigo, Marca marca);
    void removerMarca(Long id);
    Marca buscarPorId(Long id);
    Page<Marca> pesquisarTodos(Pageable pageable);
}
