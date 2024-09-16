import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesHeaderComponent } from './components/categories-header/categories-header.component';
import { ArticleContainerComponent } from './components/article-container/article-container.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  RouterOutlet, 
  HeaderComponent, 
  CategoriesHeaderComponent,
  ArticleContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'frontend';
}
