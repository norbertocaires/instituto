import { Component, inject, AfterViewInit, ElementRef } from '@angular/core';
import { SchoolDataService } from '../../services/school-data.service';
import { SchoolInfo } from '../../models';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {
  private schoolDataService = inject(SchoolDataService);
  private elementRef = inject(ElementRef);
  schoolInfo: SchoolInfo = this.schoolDataService.getSchoolInfo();

  ngAfterViewInit() {
    this.setupSmoothScroll();
  }

  private setupSmoothScroll() {
    const smoothScrollLinks = this.elementRef.nativeElement.querySelectorAll('.smooth-scroll');
    
    smoothScrollLinks.forEach((link: HTMLElement) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        
        if (href && href.startsWith('#')) {
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            const headerOffset = 100; // Altura do header fixo
            const elementPosition = targetElement.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }
}
