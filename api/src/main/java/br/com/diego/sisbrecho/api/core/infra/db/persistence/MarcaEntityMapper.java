package br.com.diego.sisbrecho.api.core.infra.db.persistence;

import java.time.LocalDateTime;

import br.com.diego.sisbrecho.api.core.domain.entities.Marca;
import br.com.diego.sisbrecho.api.core.infra.db.mapping.MarcaEntity;

public class MarcaEntityMapper {
    MarcaEntity toEntity(Marca marcaDomainObj) {
        return new MarcaEntity(null, 
        marcaDomainObj.marcaNome(),
        marcaDomainObj.marcaDescricao(),
        marcaDomainObj.marcaAtivo(),
        LocalDateTime.now(),
        "diego"
        );
    }

    Marca toDomainObj(MarcaEntity marcaEntity) {
        return new Marca(marcaEntity.getMarcaNome(),
        marcaEntity.getMarcaDescricao(),
        marcaEntity.getMarcaAtivo()
        );
    }
}
