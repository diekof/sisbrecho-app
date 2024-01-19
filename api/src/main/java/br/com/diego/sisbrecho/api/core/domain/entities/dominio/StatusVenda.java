package br.com.diego.sisbrecho.api.core.domain.entities.dominio;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum StatusVenda {
    NAO_IDENTIFICADO(0,"Não identificada"),
    VENDIDO(1,"Vendido"), 
    DEVOLVIDO(6,"Devolvido"), 
    TROCA_REALIZADA(7,"Troca realizada");

    private Integer valor;  
    private String descricao;

    public static StatusVenda toEnum(String valor){
        if(valor.isEmpty())
            return StatusVenda.NAO_IDENTIFICADO;

        for (StatusVenda x: StatusVenda.values())
            if (valor.equals(x.getValor()))
                return x;

        return StatusVenda.NAO_IDENTIFICADO;  
        
    }
}
