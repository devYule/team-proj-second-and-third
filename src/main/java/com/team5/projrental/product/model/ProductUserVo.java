package com.team5.projrental.product.model;

import com.team5.projrental.product.model.proc.GetProductListResultDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@NoArgsConstructor
@SuperBuilder
public class ProductUserVo extends ProductListVo {
    private Categories icategory;

    public ProductUserVo(GetProductListResultDto dto) {
        super(dto);
        this.icategory = dto.getIcategory();
    }

}
