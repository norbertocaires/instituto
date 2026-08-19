import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
  private sanitizer = inject(DomSanitizer);

  schoolInfo: SchoolInfo = this.schoolDataService.getSchoolInfo();

  get mapsSearchLink(): string {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.schoolInfo.endereco)}`;
  }

  get mapEmbedUrl(): SafeResourceUrl {
    const url = `https://www.google.com/maps?q=${encodeURIComponent(this.schoolInfo.endereco)}&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  get whatsAppLink(): string {
    const cleanNumber = this.schoolInfo.whatsapp.replace(/\D/g, '');
    return `https://wa.me/${cleanNumber}`;
  }
}
