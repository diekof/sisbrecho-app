package br.com.diego.sisbrecho.api.core.infra.controllers.categoria.mapper;

import java.time.LocalDateTime;

import br.com.diego.sisbrecho.api.core.domain.entities.Categoria;
import br.com.diego.sisbrecho.api.core.infra.controllers.categoria.dto.CreateCategoriaRequest;
import br.com.diego.sisbrecho.api.core.infra.controllers.categoria.dto.CreateCategoriaResponse;

public class CategoriaDTOMapper {
    public CreateCategoriaResponse toResponse(Categoria categoria) {
        return new CreateCategoriaResponse(categoria.categoriaNome(), categoria.categoriaAtivo());
    }

    public Categoria toCategoria(CreateCategoriaRequest request) {
        return new Categoria(request.categoriaNome(), request.categoriaAtivo(), LocalDateTime.now(), "api");
    }
}
