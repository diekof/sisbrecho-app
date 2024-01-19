package br.com.diego.sisbrecho.api.main;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import br.com.diego.sisbrecho.api.core.application.venda.CreateVendaUseCase;
import br.com.diego.sisbrecho.api.core.application.venda.DeleteVendaUseCase;
import br.com.diego.sisbrecho.api.core.application.venda.GetAllVendaUseCase;
import br.com.diego.sisbrecho.api.core.domain.gateways.VendaGateway;
import br.com.diego.sisbrecho.api.core.infra.controllers.venda.mapper.VendaDTOMapper;
import br.com.diego.sisbrecho.api.core.infra.db.persistence.VendaEntityMapper;
import br.com.diego.sisbrecho.api.core.infra.db.persistence.VendaRepository;
import br.com.diego.sisbrecho.api.core.infra.db.persistence.VendaRepositoryGateway;

@Configuration
public class VendaConfig {
    @Bean
    GetAllVendaUseCase getAllVendaUseCase(VendaGateway vendaGateway) {
        return new GetAllVendaUseCase(vendaGateway);
    }
    @Bean
    CreateVendaUseCase createVendaUseCase(VendaGateway vendaGateway) {
        return new CreateVendaUseCase(vendaGateway);
    }
    @Bean
    DeleteVendaUseCase deleteVendaUseCase(VendaGateway vendaGateway) {
        return new DeleteVendaUseCase(vendaGateway);
    }
    @Bean
    VendaGateway vendaGateway(VendaEntityMapper vendaEntityMapper, VendaRepository vendaRepository) {
        return new VendaRepositoryGateway(vendaEntityMapper, vendaRepository);
    }
    @Bean
    VendaEntityMapper vendaEntityMapper() {
        return new VendaEntityMapper();
    }
    @Bean
    VendaDTOMapper vendaDTOMapper() {
        return new VendaDTOMapper();
    }
}
