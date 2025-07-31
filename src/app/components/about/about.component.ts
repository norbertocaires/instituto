import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolDataService } from '../../services/school-data.service';
import { SchoolInfo } from '../../models';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  private schoolDataService = inject(SchoolDataService);
  schoolInfo: SchoolInfo = this.schoolDataService.getSchoolInfo();

  infraestrutura = [
    { nome: 'Pátio Coberto', descricao: 'Espaço coberto para atividades recreativas' },
    { nome: 'Área Verde', descricao: 'Espaço natural para contato com a natureza' },
    { nome: 'Biblioteca', descricao: 'Acervo diversificado para pesquisa e leitura' },
    { nome: 'Quadra Esportiva Descoberta', descricao: 'Espaço para práticas esportivas' },
    { nome: 'Parquinho', descricao: 'Área de recreação para os menores' },
    { nome: 'Sala de Leitura', descricao: 'Ambiente dedicado à leitura' },
    { nome: 'Sala de Professores', descricao: 'Espaço para planejamento pedagógico' },
    { nome: 'Pátio Descoberto', descricao: 'Área livre para atividades ao ar livre' },
    { nome: 'Internet', descricao: 'Conectividade para pesquisas e atividades digitais' }
  ];
}
