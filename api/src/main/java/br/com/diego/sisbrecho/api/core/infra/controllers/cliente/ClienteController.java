package br.com.diego.sisbrecho.api.core.infra.controllers.cliente;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.diego.sisbrecho.api.core.application.cliente.CreateClienteUseCase;
import br.com.diego.sisbrecho.api.core.application.cliente.DeleteClienteUseCase;
import br.com.diego.sisbrecho.api.core.application.cliente.GetAllClienteUseCase;
import br.com.diego.sisbrecho.api.core.domain.entities.Cliente;
import br.com.diego.sisbrecho.api.core.domain.gateways.CustomPageRequest;
import br.com.diego.sisbrecho.api.core.infra.controllers.cliente.dto.CreateClienteRequest;
import br.com.diego.sisbrecho.api.core.infra.controllers.cliente.dto.CreateClienteResponse;
import br.com.diego.sisbrecho.api.core.infra.controllers.cliente.mapper.ClienteDTOMapper;
import br.com.diego.sisbrecho.api.core.infra.db.persistence.PageableConverter;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/cliente")
public class ClienteController {

    private final CreateClienteUseCase createClienteUseCase;
    private final GetAllClienteUseCase getAllClienteUseCase;
    private final ClienteDTOMapper clienteDTOMapper;
    private final DeleteClienteUseCase deleteClienteUseCase;

    public ClienteController(
            CreateClienteUseCase createClienteUseCase, 
            GetAllClienteUseCase getAllClienteUseCase,
            DeleteClienteUseCase deleteClienteUseCase,
            ClienteDTOMapper clienteDTOMapper
        ) {
        this.createClienteUseCase = createClienteUseCase;
        this.getAllClienteUseCase = getAllClienteUseCase;
        this.clienteDTOMapper = clienteDTOMapper;
        this.deleteClienteUseCase = deleteClienteUseCase;
    }

    @PostMapping
    public CreateClienteResponse createCliente(@RequestBody CreateClienteRequest request) {
        Cliente clienteBusinessObj = clienteDTOMapper.toCliente(request);
        Cliente cliente = createClienteUseCase.execute(clienteBusinessObj);
        return clienteDTOMapper.toResponse(cliente);
    }

    @DeleteMapping
    public void deleteCliente(@RequestParam Long id) {
        deleteClienteUseCase.execute(id);
    }

    @GetMapping
    public Page<Cliente> listarTodos(@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            ClienteDTOMapper clienteDTOMapper, Pageable pageable) {
        
        CustomPageRequest customPageRequest = PageableConverter.convertToCustomPageRequest(pageable);
        Page<Cliente> clientes = getAllClienteUseCase.execute(pageable);
        
        return clientes;//PageConverter.listToPage(clientes, pageable);
    }
    
    
}
