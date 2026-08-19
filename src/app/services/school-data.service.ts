import { Injectable } from '@angular/core';
import { SchoolInfo } from '../models';

export const schoolData: SchoolInfo = {
  nome: 'Instituto Educacional Conviver',
  slogan: '',
  endereco: 'Praça Padre Antônio Folha, 162, Barra da Estiva, BA, Brazil',
  telefone: '(77) 99808-7319',
  whatsapp: '(77) 99808-7319',
  email: 'iec.conviverpositivo@gmail.com',
  instagram: 'https://www.instagram.com/institutoeducacionalconviver',
  facebook: 'https://www.facebook.com/conviveriec/',
  fundacao: '',
  anos: 0,
  inep: '',
  cnpj: '',
  missao: '',
  visao: '',
  valores: []
};

@Injectable({
  providedIn: 'root'
})
export class SchoolDataService {

  constructor() { }

  // Informações da escola
  getSchoolInfo(): SchoolInfo {
    return schoolData;
  }
}
