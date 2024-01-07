package br.com.diego.sisbrecho.api.core.infra.controllers.marca;

import org.springframework.web.bind.annotation.RestController;

import br.com.diego.sisbrecho.api.core.application.marca.CreateMarcaUseCase;
import br.com.diego.sisbrecho.api.core.application.marca.DeleteMarcaUseCase;
import br.com.diego.sisbrecho.api.core.application.marca.GetAllMarcaUseCase;
import br.com.diego.sisbrecho.api.core.domain.entities.Marca;
import br.com.diego.sisbrecho.api.core.infra.controllers.marca.dto.CreateMarcaRequest;
import br.com.diego.sisbrecho.api.core.infra.controllers.marca.dto.CreateMarcaResponse;
import br.com.diego.sisbrecho.api.core.infra.controllers.marca.mapper.MarcaDTOMapper;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/marca")
public class MarcaController {

    private final CreateMarcaUseCase createMarcaUseCase;
    private final GetAllMarcaUseCase getAllMarcaUseCase;
    private final DeleteMarcaUseCase deleteMarcaUseCase;
    private final MarcaDTOMapper marcaDTOMapper;

    public MarcaController(CreateMarcaUseCase createMarcaUseCase, GetAllMarcaUseCase getAllMarcaUseCase,
            DeleteMarcaUseCase deleteMarcaUseCase, MarcaDTOMapper marcaDTOMapper) {
        this.createMarcaUseCase = createMarcaUseCase;
        this.getAllMarcaUseCase = getAllMarcaUseCase;
        this.deleteMarcaUseCase = deleteMarcaUseCase;
        this.marcaDTOMapper = marcaDTOMapper;
    }

    @PostMapping
    public CreateMarcaResponse criar(@RequestBody CreateMarcaRequest request) {
        var marca = marcaDTOMapper.toMarca(request);
        var marcaCriada = createMarcaUseCase.execute(marca);
        return marcaDTOMapper.toResponse(marcaCriada);
    }

    @DeleteMapping
    public void deleteMarca(@RequestParam Long id) {
        deleteMarcaUseCase.execute(id);
    }

    @GetMapping
    public Page<Marca> listarTodos(@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "marcaNome") String sortBy,
            @RequestParam(defaultValue = "ASC") String sortDirection,
            MarcaDTOMapper marcaDTOMapper,
            Pageable pageable) {
        // Pageable pageable = PageableConverter.toPageable(page, size, sortBy, sortDirection);
        Page<Marca> marcas = getAllMarcaUseCase.execute(pageable);
        return marcas;
    }

}
