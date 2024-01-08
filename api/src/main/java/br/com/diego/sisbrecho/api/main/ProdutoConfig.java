package br.com.diego.sisbrecho.api.main;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import br.com.diego.sisbrecho.api.core.application.produto.CreateProdutoUseCase;
import br.com.diego.sisbrecho.api.core.application.produto.DeleteProdutoUseCase;
import br.com.diego.sisbrecho.api.core.application.produto.GetAllProdutoUseCase;
import br.com.diego.sisbrecho.api.core.domain.gateways.ProdutoGateway;
import br.com.diego.sisbrecho.api.core.infra.controllers.produto.mapper.ProdutoDTOMapper;
import br.com.diego.sisbrecho.api.core.infra.db.persistence.ProdutoEntityMapper;
import br.com.diego.sisbrecho.api.core.infra.db.persistence.ProdutoRepository;
import br.com.diego.sisbrecho.api.core.infra.db.persistence.ProdutoRepositoryGateway;

@Configuration
public class ProdutoConfig {

    @Bean
    GetAllProdutoUseCase getAllProdutoUseCase(ProdutoGateway produtoGateway) {
        return new GetAllProdutoUseCase(produtoGateway);
    }
    @Bean
    CreateProdutoUseCase createProdutoUseCase(ProdutoGateway produtoGateway) {
        return new CreateProdutoUseCase(produtoGateway);
    }
    @Bean
    DeleteProdutoUseCase deleteProdutoUseCase(ProdutoGateway produtoGateway) {
        return new DeleteProdutoUseCase(produtoGateway);
    }
    @Bean
    ProdutoGateway produtoGateway(ProdutoEntityMapper produtoEntityMapper, ProdutoRepository produtoRepository) {
        return new ProdutoRepositoryGateway(produtoEntityMapper, produtoRepository);
    }
    @Bean
    ProdutoEntityMapper produtoEntityMapper() {
        return new ProdutoEntityMapper();
    }
    @Bean
    ProdutoDTOMapper produtoDTOMapper() {
        return new ProdutoDTOMapper();
    }
    
    
}
