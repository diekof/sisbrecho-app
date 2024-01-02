package br.com.diego.sisbrecho.api.core.application.categoria;

import br.com.diego.sisbrecho.api.core.domain.gateways.CategoriaGateway;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class DeleteCategoriaUseCase {
    private final CategoriaGateway categoriaGateway;
    
    public void execute(Long id) {
        categoriaGateway.removerCategoria(id);
    }
}
