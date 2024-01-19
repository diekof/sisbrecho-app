package br.com.diego.sisbrecho.api.core.infra.db.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.diego.sisbrecho.api.core.infra.db.mapping.VendaEntity;

public interface VendaRepository extends JpaRepository<VendaEntity, Long> {
    
}
