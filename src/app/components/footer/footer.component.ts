import { Component, inject } from '@angular/core';
import { SchoolDataService } from '../../services/school-data.service';
import { SchoolInfo } from '../../models';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private schoolDataService = inject(SchoolDataService);
  schoolInfo: SchoolInfo = this.schoolDataService.getSchoolInfo();
  

  
  currentYear = new Date().getFullYear();
}
