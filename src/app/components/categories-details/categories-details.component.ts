import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from '../../core/interfaces/icategory';
import { ISubcategory } from '../../core/interfaces/isubcategory';

@Component({
  selector: 'app-categories-details',
  standalone: true,
  imports: [],
  templateUrl: './categories-details.component.html',
  styleUrl: './categories-details.component.scss',
})
export class CategoriesDetailsComponent implements OnInit {
  private readonly _CategoriesService = inject(CategoriesService);
  private readonly _ActivatedRoute = inject(ActivatedRoute);

  detailCategory: ICategory|null=null;
  SubCategoriesOnCat: ISubcategory[] = [];

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        let idCategory = param.get('id');
        this._CategoriesService.getSpeceficCategories(idCategory).subscribe({
          next: (res) => {
            this.detailCategory = res.data;
          },
        });
        this._CategoriesService.getSubCategoriesOnCat(idCategory).subscribe({
          next: (res) => {
            this.SubCategoriesOnCat = res.data;
          },
        });
      },
    });
  }
}
