import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolDataService } from '../../services/school-data.service';
import { News } from '../../models';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  private schoolDataService = inject(SchoolDataService);
  news: News[] = this.schoolDataService.getNews();
}
