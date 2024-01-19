package br.com.diego.sisbrecho.api.core.infra.controllers.venda;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.diego.sisbrecho.api.core.application.venda.CreateVendaUseCase;
import br.com.diego.sisbrecho.api.core.application.venda.DeleteVendaUseCase;
import br.com.diego.sisbrecho.api.core.application.venda.GetAllVendaUseCase;
import br.com.diego.sisbrecho.api.core.domain.entities.Venda;
import br.com.diego.sisbrecho.api.core.infra.controllers.venda.dto.CreateVendaRequest;
import br.com.diego.sisbrecho.api.core.infra.controllers.venda.dto.CreateVendaResponse;
import br.com.diego.sisbrecho.api.core.infra.controllers.venda.mapper.VendaDTOMapper;

@RestController
@RequestMapping("/venda")
public class VendaController {
    private final CreateVendaUseCase createVendaUseCase;
    private final GetAllVendaUseCase getAllVendaUseCase;
    private final DeleteVendaUseCase deleteVendaUseCase;
    private final VendaDTOMapper vendaDTOMapper;

    public VendaController(
        CreateVendaUseCase createVendaUseCase,
        GetAllVendaUseCase getAllVendaUseCase,
        DeleteVendaUseCase deleteVendaUseCase,
        VendaDTOMapper vendaDTOMapper
    ) {
        this.createVendaUseCase = createVendaUseCase;
        this.getAllVendaUseCase = getAllVendaUseCase;
        this.deleteVendaUseCase = deleteVendaUseCase;
        this.vendaDTOMapper = vendaDTOMapper;
    }

    @PostMapping
    public CreateVendaResponse criar(@RequestBody CreateVendaRequest request) {
        var venda = vendaDTOMapper.toVenda(request);
        var vendaCriada = createVendaUseCase.execute(venda);
        return vendaDTOMapper.toResponse(vendaCriada);
    }

    @DeleteMapping
    public void deleteVenda(@RequestBody Long id) {
        deleteVendaUseCase.execute(id);
    }

    @GetMapping
    public Page<Venda> lsitarTodos(@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "vendaData") String sortBy,
            @RequestParam(defaultValue = "ASC") String sortDirection,
            VendaDTOMapper vendaDTOMapper,
            Pageable pageable) {
        Page<Venda> vendas = getAllVendaUseCase.execute(pageable);
        return vendas;
    }
    
}
