import { Component, inject } from '@angular/core';
import { SchoolDataService } from '../../services/school-data.service';
import { SchoolInfo } from '../../models/index';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private schoolDataService = inject(SchoolDataService);
  schoolInfo: SchoolInfo = this.schoolDataService.getSchoolInfo();
}
