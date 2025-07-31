import { Injectable } from '@angular/core';
import { SchoolInfo, Course, News, Event, Staff } from '../models';

const calcularAnosDeExistencia = (anoFundacao: number): number => {
  const anoAtual = new Date().getFullYear();
  return anoAtual - anoFundacao;
};

export const schoolData: SchoolInfo = {
  nome: 'Instituto Educacional Conviver',
  slogan: 'Educando para a vida',
  endereco: 'Barra da Estiva, BA',
  telefone: '(77) 3450-1823',
  whatsapp: '(77) 99808-7319',
  email: 'ieconviver@gmail.com',
  instagram: 'https://instagram.com/institutoeducacionalconviver',
  facebook: 'https://www.facebook.com/conviveriec',
  fundacao: '1995',
  anos: calcularAnosDeExistencia(1995),
  inep: '12345678',
  cnpj: '12.345.678/0001-90',
  missao: 'Promover uma educação de qualidade, pautada em valores humanos, formando cidadãos críticos, éticos e preparados para os desafios da vida.',
  visao: 'Ser reconhecido como referência em educação na região da Chapada Diamantina, pela excelência no ensino e formação dos estudantes.',
  valores: [
    'Respeito e amor ao próximo',
    'Compromisso com a educação',
    'Ética e transparência',
    'Responsabilidade social e ambiental',
    'Excelência acadêmica'
  ]
};

export const coursesData: Course[] = [
  {
    nome: 'Educação Infantil',
    descricao: 'Desenvolvimento integral das crianças através de atividades lúdicas e pedagógicas.',
    idade: '2 a 5 anos',
    modalidade: 'Presencial'
  },
  {
    nome: 'Ensino Fundamental I',
    descricao: 'Formação básica com foco na alfabetização e desenvolvimento cognitivo.',
    idade: '6 a 10 anos',
    modalidade: 'Presencial'
  },
  {
    nome: 'Ensino Fundamental II',
    descricao: 'Aprofundamento dos conhecimentos e preparação para o ensino médio.',
    idade: '11 a 14 anos',
    modalidade: 'Presencial'
  }
];

export const eventsData: Event[] = [
  {
    data: { dia: '22', mes: 'AGO' },
    titulo: 'Desfile de Primavera',
    descricao: 'Venha participar do nosso tradicional desfile de primavera com muita cor, alegria e criatividade!',
    hora: '09:00',
    local: 'Quadra da escola'
  },
  {
    data: { dia: '07', mes: 'SET' },
    titulo: 'Independência do Brasil',
    descricao: 'Celebração da Independência com apresentações culturais.',
    hora: '08:00',
    local: 'Quadra esportiva'
  },
  {
    data: { dia: '12', mes: 'OUT' },
    titulo: 'Dia das Crianças',
    descricao: 'Atividades especiais e recreativas para os alunos.',
    hora: '08:00',
    local: 'Toda a escola'
  }
];

export const newsData: News[] = [
  {
    titulo: 'Início do Ano Letivo 2025',
    data: '05/02/2025',
    conteudo: 'Iniciamos mais um ano letivo com muitas novidades e projetos educacionais inovadores.',
    autor: 'Direção'
  },
  {
    titulo: 'Matrículas Abertas para 2025',
    data: '15/01/2025',
    conteudo: 'Estão abertas as matrículas para o ano letivo de 2025. Garante já a vaga do seu filho!',
    autor: 'Secretaria'
  }
];

@Injectable({
  providedIn: 'root'
})
export class SchoolDataService {

  constructor() { }

  // Informações da escola
  getSchoolInfo(): SchoolInfo {
    return schoolData;
  }

  // Cursos oferecidos
  getCourses(): Course[] {
    return coursesData;
  }

  // Notícias
  getNews(): News[] {
    return newsData;
  }

  // Eventos
  getEvents(): Event[] {
    return eventsData;
  }

  // Funcionários/Staff (mantendo compatibilidade)
  getStaff(): Staff[] {
    return [
      {
        id: 1,
        name: 'Maria Silva',
        position: 'Diretora',
        department: 'Direção',
        bio: 'Educadora com mais de 20 anos de experiência.',
        image: '/assets/images/staff/maria.jpg',
        qualifications: ['Pedagogia', 'Mestrado em Educação'],
        email: 'maria@ieconviver.com.br'
      },
      {
        id: 2,
        name: 'João Santos',
        position: 'Coordenador Pedagógico',
        department: 'Coordenação',
        bio: 'Especialista em metodologias ativas de ensino.',
        image: '/assets/images/staff/joao.jpg',
        qualifications: ['Letras', 'Especialização em Gestão Escolar'],
        email: 'joao@ieconviver.com.br'
      }
    ];
  }
}
