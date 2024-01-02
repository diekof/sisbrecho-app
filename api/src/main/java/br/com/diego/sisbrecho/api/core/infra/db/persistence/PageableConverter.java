package br.com.diego.sisbrecho.api.core.infra.db.persistence;

import org.springframework.data.domain.Pageable;

import br.com.diego.sisbrecho.api.core.domain.gateways.CustomPageRequest;

public class PageableConverter {

    public static CustomPageRequest convertToCustomPageRequest(Pageable pageable) {
        // Lógica de conversão do Pageable para CustomPageRequest
        // Implemente conforme necessário

        int page = pageable.getPageNumber();
        int size = pageable.getPageSize();
        // outras informações do Pageable...

        return new CustomPageRequest(page, size);
    }
    public static Pageable convertToPageable(CustomPageRequest customPageRequest) {
        // Lógica de conversão do CustomPageRequest para Pageable
        // Implemente conforme necessário

        int page = customPageRequest.getPage();
        int size = customPageRequest.getSize();
        // outras informações do CustomPageRequest...

        return Pageable.ofSize(size).withPage(page);
    }
}


