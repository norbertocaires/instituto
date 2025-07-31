import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolDataService } from '../../services/school-data.service';
import { Course } from '../../models';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  private schoolDataService = inject(SchoolDataService);
  courses: Course[] = this.schoolDataService.getCourses();
}
