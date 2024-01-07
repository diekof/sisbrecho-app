package br.com.diego.sisbrecho.api.core.infra.controllers.marca.dto;

public record CreateMarcaRequest(
    String marcaNome,
    String marcaDescricao,
    Integer marcaAtivo
) {
    
}
