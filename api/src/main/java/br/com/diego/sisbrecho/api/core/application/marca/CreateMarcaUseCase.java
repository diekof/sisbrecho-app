package br.com.diego.sisbrecho.api.core.application.marca;

import br.com.diego.sisbrecho.api.core.domain.entities.Marca;
import br.com.diego.sisbrecho.api.core.domain.gateways.MarcaGateway;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class CreateMarcaUseCase {
    private final MarcaGateway marcaGateway;
    public Marca execute(Marca marca) {
        return marcaGateway.createMarca(marca);
    }    
}
