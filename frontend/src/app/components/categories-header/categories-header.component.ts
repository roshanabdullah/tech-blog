import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CategoriesHttpService } from '../../services/categories-http.service';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-categories-header',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, FontAwesomeModule],
  templateUrl: './categories-header.component.html',
  styleUrl: './categories-header.component.scss'
})
export class CategoriesHeaderComponent implements OnInit {

  faSearch = faSearch;
  categories: any[] = [];

  constructor(private categoryService: CategoriesHttpService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
      console.log(this.categories)
    });
  }

}
