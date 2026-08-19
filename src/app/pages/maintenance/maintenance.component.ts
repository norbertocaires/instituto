import { Component, OnInit, inject } from '@angular/core';
import { PageMetaService } from '../../services/page-meta.service';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.scss'
})
export class MaintenanceComponent implements OnInit {
  private pageMeta = inject(PageMetaService);

  ngOnInit(): void {
    // Favicon, cor da barra do navegador e descrição genéricos — nada
    // que identifique o instituto enquanto o site estiver em manutenção.
    this.pageMeta.setFavicon('favicon-maintenance.svg');
    this.pageMeta.setThemeColor('#475569');
    this.pageMeta.setDescription('Site em manutenção. Voltamos logo.');
  }
}
