package br.com.diego.sisbrecho.api.core.domain.entities;

import java.time.LocalDateTime;

public record Categoria(String categoriaNome, 
Integer categoriaAtivo, 
LocalDateTime categoriaIncEm, 
String categoriaIncPor) {
}
