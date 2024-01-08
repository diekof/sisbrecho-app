package br.com.diego.sisbrecho.api.core.infra.controllers.produto.dto;

import java.time.LocalDateTime;

public record CreateProdutoRequest(
    Long produtoCategoriaId,
    Long produtoMarcaId,
    String produtoSku,
    String produtoNome,
    String produtoDescricao,
    Double produtoValorCompra,
    Double produtoValorTotal,
    Double produtoLucro,
    Double produtoPercentual,
    Integer produtoStatus,
    String produtoCor,
    LocalDateTime produtoIncEm,
    String produtoIncPor
) {
    
}
