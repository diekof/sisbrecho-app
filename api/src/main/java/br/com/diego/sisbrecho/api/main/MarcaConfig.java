package br.com.diego.sisbrecho.api.main;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import br.com.diego.sisbrecho.api.core.application.marca.CreateMarcaUseCase;
import br.com.diego.sisbrecho.api.core.application.marca.DeleteMarcaUseCase;
import br.com.diego.sisbrecho.api.core.application.marca.GetAllMarcaUseCase;

import br.com.diego.sisbrecho.api.core.domain.gateways.MarcaGateway;
import br.com.diego.sisbrecho.api.core.infra.controllers.marca.mapper.MarcaDTOMapper;
import br.com.diego.sisbrecho.api.core.infra.db.persistence.MarcaEntityMapper;
import br.com.diego.sisbrecho.api.core.infra.db.persistence.MarcaRepository;
import br.com.diego.sisbrecho.api.core.infra.db.persistence.MarcaRepositoryGateway;

@Configuration
public class MarcaConfig {

    @Bean
    GetAllMarcaUseCase getAllMarcaUseCase(MarcaGateway marcaGateway) {
        return new GetAllMarcaUseCase(marcaGateway);
    }
    @Bean
    CreateMarcaUseCase createMarcaUseCase(MarcaGateway marcaGateway) {
        return new CreateMarcaUseCase(marcaGateway);
    }
    @Bean
    DeleteMarcaUseCase deleteMarcaUseCase(MarcaGateway marcaGateway) {
        return new DeleteMarcaUseCase(marcaGateway);
    }
    @Bean
    MarcaGateway marcaGateway(MarcaEntityMapper marcaEntityMapper, MarcaRepository marcaRepository) {
        return new MarcaRepositoryGateway(marcaEntityMapper, marcaRepository);
    }
    @Bean
    MarcaEntityMapper marcaEntityMapper() {
        return new MarcaEntityMapper();
    }
    @Bean
    MarcaDTOMapper marcaDTOMapper() {
        return new MarcaDTOMapper();
    }

}
