package br.com.diego.sisbrecho.api.core.infra.controllers.marca.dto;

public record CreateMarcaResponse(
    String marcaNome,
    String marcaDescricao,
    Integer marcaAtivo
) {
    
}
