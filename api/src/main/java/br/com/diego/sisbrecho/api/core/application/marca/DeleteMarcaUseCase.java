package br.com.diego.sisbrecho.api.core.application.marca;

import br.com.diego.sisbrecho.api.core.domain.gateways.MarcaGateway;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class DeleteMarcaUseCase {
    private final MarcaGateway marcaGateway;
    public void execute(Long id) {
        marcaGateway.removerMarca(id);
    }
}
