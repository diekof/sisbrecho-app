package br.com.diego.sisbrecho.api.core.infra.db.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.diego.sisbrecho.api.core.infra.db.mapping.ClienteEntity;

public interface ClienteRepository extends JpaRepository<ClienteEntity, Long>{
    
}
