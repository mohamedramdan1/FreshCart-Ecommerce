import { RouterLink } from '@angular/router';
import { ICategory } from '../../core/interfaces/icategory';
import { CategoriesService } from './../../core/services/categories.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  private readonly _CategoriesService = inject(CategoriesService);
  CategoriesList: ICategory[] = [];

  ngOnInit(): void {
    this._CategoriesService.getAllCategories().subscribe({
      next: (res) => {
        this.CategoriesList = res.data;
      },
    });
  }
}
