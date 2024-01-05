package br.com.diego.sisbrecho.api.core.infra.controllers.categoria;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.diego.sisbrecho.api.core.application.categoria.*;
import br.com.diego.sisbrecho.api.core.domain.entities.Categoria;
import br.com.diego.sisbrecho.api.core.domain.gateways.CustomPageRequest;
import br.com.diego.sisbrecho.api.core.infra.controllers.categoria.dto.CreateCategoriaRequest;
import br.com.diego.sisbrecho.api.core.infra.controllers.categoria.dto.CreateCategoriaResponse;
import br.com.diego.sisbrecho.api.core.infra.controllers.categoria.mapper.CategoriaDTOMapper;
import br.com.diego.sisbrecho.api.core.infra.db.persistence.PageConverter;
import br.com.diego.sisbrecho.api.core.infra.db.persistence.PageableConverter;

@RestController
@RequestMapping("/categoria")
public class CategoriaController {
    
    private final CreateCategoriaUseCase createCategoriaUseCase;
    private final GetAllCategoriaUseCase getAllCategoriaUseCase;
    private final CategoriaDTOMapper categoriaDTOMapper;
    private final DeleteCategoriaUseCase deleteCategoriaUseCase;

    
    public CategoriaController(
        CreateCategoriaUseCase createCategoriaUseCase, 
        CategoriaDTOMapper categoriaDTOMapper,
        GetAllCategoriaUseCase getAllCategoriaUseCase,
        DeleteCategoriaUseCase deleteCategoriaUseCase
        ) {
        this.createCategoriaUseCase = createCategoriaUseCase;
        this.categoriaDTOMapper = categoriaDTOMapper;
        this.getAllCategoriaUseCase = getAllCategoriaUseCase;
        this.deleteCategoriaUseCase = deleteCategoriaUseCase;
    }

    @PostMapping
    public CreateCategoriaResponse createCategoria(@RequestBody CreateCategoriaRequest request) {
        Categoria categoriaBusinessObj = categoriaDTOMapper.toCategoria(request);
        Categoria categoria = createCategoriaUseCase.createCategoria(categoriaBusinessObj);
        return categoriaDTOMapper.toResponse(categoria);
    }

    @GetMapping
    public Page<Categoria> listarTodos(@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            CategoriaDTOMapper categoriaDTOMapper, Pageable pageable) {
        
        CustomPageRequest customPageRequest = PageableConverter.convertToCustomPageRequest(pageable);
        Page<Categoria> categorias = getAllCategoriaUseCase.execute(pageable);
        
        return categorias;//PageConverter.listToPage(categorias, pageable);
    }

    @DeleteMapping
    public void deleteCategoria(@RequestParam Long id) {
        deleteCategoriaUseCase.execute(id);
    }
}

