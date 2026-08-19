import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';

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

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: MAINTENANCE_MODE ? MaintenanceComponent : HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
