import { Component, inject } from '@angular/core';
import { SchoolDataService } from '../../services/school-data.service';
import { SchoolInfo } from '../../models';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.scss'
})
export class MaintenanceComponent {
  private schoolDataService = inject(SchoolDataService);
  schoolInfo: SchoolInfo = this.schoolDataService.getSchoolInfo();
}
