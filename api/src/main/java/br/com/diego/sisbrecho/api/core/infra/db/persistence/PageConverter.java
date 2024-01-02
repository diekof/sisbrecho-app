package br.com.diego.sisbrecho.api.core.infra.db.persistence;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

public class PageConverter {

    public static <T> Page<T> listToPage(List<T> list, Pageable pageable) {
        int start = (int) pageable.getOffset();
        int end = (start + pageable.getPageSize()) > list.size() ? list.size() : (start + pageable.getPageSize());

        return new PageImpl<>(list.subList(start, end), pageable, list.size());
    }
}
