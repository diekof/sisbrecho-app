package br.com.diego.sisbrecho.api.core.infra.controllers.produto;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.diego.sisbrecho.api.core.application.produto.CreateProdutoUseCase;
import br.com.diego.sisbrecho.api.core.application.produto.DeleteProdutoUseCase;
import br.com.diego.sisbrecho.api.core.application.produto.GetAllProdutoUseCase;
import br.com.diego.sisbrecho.api.core.domain.entities.Produto;
import br.com.diego.sisbrecho.api.core.infra.controllers.produto.dto.CreateProdutoRequest;
import br.com.diego.sisbrecho.api.core.infra.controllers.produto.dto.CreateProdutoResponse;
import br.com.diego.sisbrecho.api.core.infra.controllers.produto.mapper.ProdutoDTOMapper;

@RestController
@RequestMapping("/produto")
public class ProdutoController {

    private final CreateProdutoUseCase createProdutoUseCase;
    private final GetAllProdutoUseCase getAllProdutoUseCase;
    private final DeleteProdutoUseCase deleteProdutoUseCase;
    private final ProdutoDTOMapper produtoDTOMapper;

    public ProdutoController(CreateProdutoUseCase createProdutoUseCase, GetAllProdutoUseCase getAllProdutoUseCase,
            DeleteProdutoUseCase deleteProdutoUseCase, ProdutoDTOMapper produtoDTOMapper) {
        this.createProdutoUseCase = createProdutoUseCase;
        this.getAllProdutoUseCase = getAllProdutoUseCase;
        this.deleteProdutoUseCase = deleteProdutoUseCase;
        this.produtoDTOMapper = produtoDTOMapper;
    }

    @PostMapping
    public CreateProdutoResponse criar(@RequestBody CreateProdutoRequest request) {
        var produto = produtoDTOMapper.toProduto(request);
        var produtoCriado = createProdutoUseCase.execute(produto);
        return produtoDTOMapper.toResponse(produtoCriado);
    }

    @DeleteMapping
    public void deleteProduto(@RequestParam Long id) {
        deleteProdutoUseCase.execute(id);
    }

    @GetMapping
    public Page<Produto> lsitarTodos(@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "produtoNome") String sortBy,
            @RequestParam(defaultValue = "ASC") String sortDirection,
            ProdutoDTOMapper produtoDTOMapper,
            Pageable pageable) {
        Page<Produto> produtos = getAllProdutoUseCase.execute(pageable);
        return produtos;
    }

}
