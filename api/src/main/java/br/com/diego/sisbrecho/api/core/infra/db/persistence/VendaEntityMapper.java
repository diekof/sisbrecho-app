package br.com.diego.sisbrecho.api.core.infra.db.persistence;

import java.time.LocalDateTime;

import br.com.diego.sisbrecho.api.core.domain.entities.Venda;
import br.com.diego.sisbrecho.api.core.infra.db.mapping.VendaEntity;

public class VendaEntityMapper {
    VendaEntity toEntity(Venda vendaDomainObj) {
        return new VendaEntity(null, 
        vendaDomainObj.produtoId(),
        vendaDomainObj.vendaClienteId(),
        vendaDomainObj.vendaData(),
        1,
        vendaDomainObj.vendaTroca(),
        LocalDateTime.now(),
        "diego",
        vendaDomainObj.vendaFormaPagamento(),
        vendaDomainObj.vendaDesconto(),
        null,
        null
        );
    }

    Venda toDomainObj(VendaEntity vendaEntity) {
        return new Venda(
        vendaEntity.getProdutoId(),
        vendaEntity.getVendaClienteId(),
        vendaEntity.getVendaData(),
        vendaEntity.getVendaStatus(),
        vendaEntity.getVendaTroca(),
        vendaEntity.getVendaFormaPagamento(),
        vendaEntity.getVendaDesconto()
        );
    }
}
