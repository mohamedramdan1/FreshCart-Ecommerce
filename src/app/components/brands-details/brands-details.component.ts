import { Component, inject, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandsService } from '../../core/services/brands.service';
import { IBrand } from '../../core/interfaces/ibrand';

@Component({
  selector: 'app-brands-details',
  standalone: true,
  imports: [],
  templateUrl: './brands-details.component.html',
  styleUrl: './brands-details.component.scss'
})
export class BrandsDetailsComponent implements OnInit {
  private readonly _ActivatedRoute=inject(ActivatedRoute)
  private readonly _BrandsService=inject(BrandsService)

  detailBrand: IBrand|null=null;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        let idBrand = param.get('id');
        this._BrandsService.getSpeceficBrands(idBrand).subscribe({
          next: (res) => {
            this.detailBrand = res.data;
          },
        });
      },
    });
  }
}
