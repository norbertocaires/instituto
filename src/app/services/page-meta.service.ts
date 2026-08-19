import { Injectable, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';

/**
 * Ajusta metadados da página que o Angular Router não troca sozinho por
 * rota (o `title` das rotas já é automático). Cada página chama isso no
 * ngOnInit pra garantir que favicon, theme-color e descrição batem com
 * o que está sendo exibido — importante pra manutenção não vazar nada
 * da home (e vice-versa).
 */
@Injectable({
  providedIn: 'root'
})
export class PageMetaService {
  private meta = inject(Meta);

  setFavicon(href: string): void {
    const link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (link) {
      link.href = href;
    }
  }

  setThemeColor(color: string): void {
    this.meta.updateTag({ name: 'theme-color', content: color });
  }

  setDescription(description: string): void {
    this.meta.updateTag({ name: 'description', content: description });
  }
}
