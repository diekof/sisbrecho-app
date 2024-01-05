package br.com.diego.sisbrecho.api.core.application.categoria;

import java.util.List;

import br.com.diego.sisbrecho.api.core.domain.entities.Categoria;
import br.com.diego.sisbrecho.api.core.domain.gateways.CategoriaGateway;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class GetAllCategoriaUseCase {
    private final CategoriaGateway categoriaGateway;

    public Page<Categoria> execute(Pageable pageable) {
        return categoriaGateway.pesquisarTodos(pageable);
    }

    
}
