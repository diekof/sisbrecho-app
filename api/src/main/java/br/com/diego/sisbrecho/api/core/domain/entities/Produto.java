package br.com.diego.sisbrecho.api.core.domain.entities;

import java.time.LocalDateTime;

public record Produto(
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
