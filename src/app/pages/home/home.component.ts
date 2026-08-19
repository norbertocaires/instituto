import { Component, OnInit, inject } from '@angular/core';

import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ContactInfoComponent } from '../../components/contact-info/contact-info.component';
import { MissionComponent } from '../../components/mission/mission.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { PageMetaService } from '../../services/page-meta.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ContactInfoComponent,
    MissionComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private pageMeta = inject(PageMetaService);

  ngOnInit(): void {
    // Restaura favicon, cor da barra do navegador e descrição do site
    // real (podem ter sido trocados pela tela de manutenção).
    this.pageMeta.setFavicon('favicon.png');
    this.pageMeta.setThemeColor('#29b6f6');
    this.pageMeta.setDescription('Website institucional do Instituto Educacional Conviver - Educação de qualidade');
  }
}
