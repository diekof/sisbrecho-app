package br.com.diego.sisbrecho.api.core.infra.db.persistence;

import br.com.diego.sisbrecho.api.core.domain.entities.Categoria;
import br.com.diego.sisbrecho.api.core.infra.db.mapping.CategoriaEntity;

public class CategoriaEntityMapper {
    CategoriaEntity toEntity(Categoria categoriaDomainObj) {
        return new CategoriaEntity(null, categoriaDomainObj.categoriaNome(),
        categoriaDomainObj.categoriaAtivo(),
        categoriaDomainObj.categoriaIncEm(),
        categoriaDomainObj.categoriaIncPor()
        );
    }

    Categoria toDomainObj(CategoriaEntity categoriaEntity) {
        return new Categoria(categoriaEntity.getCategoriaNome(),
        categoriaEntity.getCategoriaAtivo(),
        categoriaEntity.getCategoriaIncEm(),
        categoriaEntity.getCategoriaIncPor()
        );
    }
}

