import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolDataService } from '../../services/school-data.service';
import { SchoolInfo } from '../../models';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent {
  private schoolDataService = inject(SchoolDataService);

  schoolInfo: SchoolInfo = this.schoolDataService.getSchoolInfo();

  get whatsAppLink(): string {
    const cleanNumber = this.schoolInfo.whatsapp.replace(/\D/g, '');
    return `https://wa.me/${cleanNumber}`;
  }
}
