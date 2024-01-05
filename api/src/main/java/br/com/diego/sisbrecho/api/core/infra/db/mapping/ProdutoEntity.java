package br.com.diego.sisbrecho.api.core.infra.db.mapping;

import java.time.LocalDateTime;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "produto")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProdutoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "produto_id")
    private Long produtoId;
    
    @Column(name = "produto_nome")
    private String produtoNome;  
    
    @Column(name = "produto_sku")
    private String produtoSku;   
    
    @Column(name = "produto_descricao")
    private String produtoDescricao;   
    
    @Column(name = "produto_valor_compra")
    private Double produtoValorCompra;   

    @Column(name = "produto_valor_total")
    private Double produtoValorTotal;   

    @Column(name = "produto_lucro")
    private Double produtoLucro;  

    @Column(name = "produto_percentual")
    private Double produtoPercentual; 

    @Column(name = "produto_cor")
    private String produtoCor;   
    
    @Column(name = "produto_status")
    private Integer produtoStatus;   
    
    @Column(name = "produto_inc_em")
    private LocalDateTime produtoIncEm;
    
    @Column(name = "produto_inc_por")
    private String produtoIncPor;
    
    @Column(name = "produto_marca_id")
    private Long produtoMarcaId;
    
    @Column(name = "produto_categoria_id")
    private Long produtoCategoriaId;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "produto_marca_id", referencedColumnName = "marca_id", insertable = false, updatable = false)
    private MarcaEntity marca;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "produto_categoria_id", referencedColumnName = "categoria_id", insertable = false, updatable = false)
    private CategoriaEntity categoria;
    
}
