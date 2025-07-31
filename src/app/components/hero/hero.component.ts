import { Component, inject } from '@angular/core';
import { SchoolDataService } from '../../services/school-data.service';
import { SchoolInfo } from '../../models';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  private schoolDataService = inject(SchoolDataService);
  schoolInfo: SchoolInfo = this.schoolDataService.getSchoolInfo();
}
