package br.com.diego.sisbrecho.api.core.domain.gateways;

import lombok.Data;

@Data
public class CustomPageRequest {

    private final int page;
    private final int size;

    public CustomPageRequest(int page, int size) {
        this.page = page;
        this.size = size;
        // this.nome = nome;
    }

    // getters...
}