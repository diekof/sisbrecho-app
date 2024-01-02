package br.com.diego.sisbrecho.api.core.application.categoria;

import java.util.List;

import br.com.diego.sisbrecho.api.core.domain.entities.Categoria;
import br.com.diego.sisbrecho.api.core.domain.gateways.CategoriaGateway;
import br.com.diego.sisbrecho.api.core.domain.gateways.CustomPageRequest;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class GetAllCategoriaUseCase {
    private final CategoriaGateway categoriaGateway;

    public List<Categoria> execute(CustomPageRequest pageable) {
        return categoriaGateway.pesquisarTodos(pageable);
    }

    
}
