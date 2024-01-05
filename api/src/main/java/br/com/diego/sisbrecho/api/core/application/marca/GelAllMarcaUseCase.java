package br.com.diego.sisbrecho.api.core.application.marca;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.diego.sisbrecho.api.core.domain.entities.Marca;
import br.com.diego.sisbrecho.api.core.domain.gateways.MarcaGateway;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class GelAllMarcaUseCase {
    private final MarcaGateway marcaGateway;
    public Page<Marca> execute(Pageable pageable) {
        return marcaGateway.pesquisarTodos(pageable);
    }
}
