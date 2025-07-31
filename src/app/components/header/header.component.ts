import { Component, inject, HostListener } from '@angular/core';
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
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    
    // Sincronizar mobile menu com contact actions
    const contactActions = document.querySelector('.contact-actions') as HTMLElement;
    if (contactActions) {
      if (this.isMenuOpen) {
        contactActions.classList.add('active');
      } else {
        contactActions.classList.remove('active');
      }
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    
    // Remover classe active do contact actions
    const contactActions = document.querySelector('.contact-actions') as HTMLElement;
    if (contactActions) {
      contactActions.classList.remove('active');
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    
    // Implementar scroll suave para links com classe smooth-scroll
    if (target.classList.contains('smooth-scroll') || target.closest('.smooth-scroll')) {
      event.preventDefault();
      
      const link = target.classList.contains('smooth-scroll') ? target : target.closest('.smooth-scroll');
      const href = link?.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          const headerHeight = 80; // Altura aproximada do header
          const offsetTop = (targetElement as HTMLElement).offsetTop - headerHeight;
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
      
      this.closeMenu();
    }
  }
}
