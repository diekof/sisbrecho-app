package br.com.diego.sisbrecho.api.core.infra.controllers.marca.mapper;

import br.com.diego.sisbrecho.api.core.domain.entities.Marca;
import br.com.diego.sisbrecho.api.core.infra.controllers.marca.dto.CreateMarcaRequest;
import br.com.diego.sisbrecho.api.core.infra.controllers.marca.dto.CreateMarcaResponse;

public class MarcaDTOMapper {
    public CreateMarcaResponse toResponse (Marca marca) {
        return new CreateMarcaResponse(marca.marcaNome(), marca.marcaDescricao(), marca.marcaAtivo());
    }
    public Marca toMarca(CreateMarcaRequest request) {
        return new Marca(request.marcaNome(), request.marcaDescricao(), request.marcaAtivo());
    }
}
