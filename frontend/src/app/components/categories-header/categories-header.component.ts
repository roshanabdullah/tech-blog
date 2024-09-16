import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-categories-header',
  standalone: true,
  imports: [MatToolbarModule,],
  templateUrl: './categories-header.component.html',
  styleUrl: './categories-header.component.scss'
})
export class CategoriesHeaderComponent {

}
