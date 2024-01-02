package br.com.diego.sisbrecho.api.core.application.categoria;

import br.com.diego.sisbrecho.api.core.domain.entities.Categoria;
import br.com.diego.sisbrecho.api.core.domain.gateways.CategoriaGateway;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class CreateCategoriaUseCase {
    private final CategoriaGateway categoriaGateway;

    public Categoria createCategoria(Categoria categoria) {
        return categoriaGateway.createCategoria(categoria);
    }
}
