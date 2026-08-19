import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Importing components
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { MissionComponent } from './components/mission/mission.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    ContactInfoComponent,
    MissionComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Instituto Educacional Conviver';
}
