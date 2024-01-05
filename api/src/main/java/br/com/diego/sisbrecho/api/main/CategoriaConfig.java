package br.com.diego.sisbrecho.api.main;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import br.com.diego.sisbrecho.api.core.application.categoria.CreateCategoriaUseCase;
import br.com.diego.sisbrecho.api.core.application.categoria.DeleteCategoriaUseCase;
import br.com.diego.sisbrecho.api.core.application.categoria.GetAllCategoriaUseCase;
import br.com.diego.sisbrecho.api.core.domain.gateways.CategoriaGateway;
import br.com.diego.sisbrecho.api.core.infra.controllers.categoria.mapper.CategoriaDTOMapper;

import br.com.diego.sisbrecho.api.core.infra.db.persistence.CategoriaEntityMapper;
import br.com.diego.sisbrecho.api.core.infra.db.persistence.CategoriaRepository;
import br.com.diego.sisbrecho.api.core.infra.db.persistence.CategoriaRepositoryGateway;

@Configuration
public class CategoriaConfig {
    @Bean
    GetAllCategoriaUseCase getAllCategoriaUseCase(CategoriaGateway categoriaGateway) {
        return new GetAllCategoriaUseCase(categoriaGateway);
    }
    @Bean
    CreateCategoriaUseCase createCategoriaUseCase(CategoriaGateway categoriaGateway) {
        return new CreateCategoriaUseCase(categoriaGateway);
    }
    @Bean
    DeleteCategoriaUseCase deleteCategoriaUseCase(CategoriaGateway categoriaGateway) {
        return new DeleteCategoriaUseCase(categoriaGateway);
    }

    @Bean
    CategoriaGateway categoriaGateway(CategoriaRepository categoriaRepository, CategoriaEntityMapper categoriaEntityMapper) {
        return new CategoriaRepositoryGateway(categoriaEntityMapper,categoriaRepository);
    }

    @Bean
    CategoriaEntityMapper categoriaEntityMapper() {
        return new CategoriaEntityMapper();
    }

    @Bean
    CategoriaDTOMapper categoriaDTOMapper() {
        return new CategoriaDTOMapper();
    }
}

