import { Routes } from '@angular/router';

/**
 * Modo manutenção.
 *
 * - true  -> quem acessa a raiz do site ("/") vê a página de manutenção.
 * - false -> a raiz volta a mostrar o site normal.
 *
 * Em QUALQUER um dos dois casos, o site normal continua acessível
 * diretamente em "/home" — útil para conferir/testar antes de voltar.
 *
 * Pra voltar ao ar: troque para "false" (ou apague a rota "" abaixo) e
 * publique de novo.
 */
const MAINTENANCE_MODE = true;

// Rotas carregadas sob demanda (loadComponent): quem cai em "/" só baixa o
// JS da página que está vendo, não o das duas — importa na carga inicial.
export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'IEC'
  },
  {
    path: '',
    loadComponent: () => MAINTENANCE_MODE
      ? import('./pages/maintenance/maintenance.component').then(m => m.MaintenanceComponent)
      : import('./pages/home/home.component').then(m => m.HomeComponent),
    title: MAINTENANCE_MODE ? 'Em manutenção' : 'IEC',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '' }
];
