package br.com.diego.sisbrecho.api.core.infra.db.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.diego.sisbrecho.api.core.infra.db.mapping.MarcaEntity;

public interface MarcaRepository extends JpaRepository<MarcaEntity, Long>{
    
}
