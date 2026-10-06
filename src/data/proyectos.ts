export interface Proyecto {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: 'Fullstack' | 'Frontend' | 'Backend' | 'Herramientas' | 'Mobile';
  tecnologias: string[];
  imagen?: string;
  demoUrl?: string;
  githubUrl?: string;
  destacado?: boolean;
  estado?: 'Completado' | 'En desarrollo' | 'Open Source';
  metricas?: string;
  caracteristicas?: string[];
}

export const proyectos: Proyecto[] = [
  {
    id: 'balanceapp',
    titulo: 'BalanceApp',
    descripcion:
      'Aplicacion web gestion de citas para un consultorio de nutriologia.',
    categoria: 'Fullstack',
    tecnologias: ['JavaScript', 'Java', 'MySQL'],
    imagen: '/img/ToProjects/BalanceApp-preview.png',
    demoUrl: 'https://balance-app-frontend.vercel.app',
    githubUrl: 'https://github.com/FernadoOXD/BalanceApp',
    destacado: true,
    estado: 'Completado',
    metricas: '100% Score Lighthouse',
    caracteristicas: [
      'Desarrollo frontend con HTML, CSS, JavaScript Vanilla',
      'Desarrollo backend con Java, MySQL',
      'Implementación de base de datos relacional con MySQL',
      'Diseño UI/UX limpio y responsive',
      'Panel administrativo para gestión de citas',
      'Sistema de autenticación con roles de usuario'
    ]
  },
  {
    id: 'subscription-tracker',
    titulo: 'Subscription Tracker',
    descripcion:
      'Aplicacion web para gestionar suscripciones y gastos recurrentes con recordatorios personalizados.',
    categoria: 'Frontend',
    tecnologias: ['ReactJS', 'Tailwind CSS', 'JavaScript', 'Vite'],
    imagen: '/img/ToProjects/Subscription-preview.png',
    demoUrl: '#',
    githubUrl: 'https://github.com/FernadoOXD/Suscription-Tracker',
    destacado: false,
    estado: 'Completado',
    metricas: '100% Score Lighthouse',
    caracteristicas: [
      'Gestión de suscripciones con recordatorios personalizados',
      'Diseño UI/UX limpio y responsive',
      'Manejo de estados y transiciones suaves'
    ]
  },
  {
    id: 'to-do-list',
    titulo: 'ToDo List',
    descripcion:
      'Aplicación web interactiva para la gestión de tareas diarias.',
    categoria: 'Frontend',
    tecnologias: ['ReactJS', 'Tailwind CSS', 'JavaScript', 'Vite'],
    imagen: '/img/ToProjects/ToDo-List-preview.png',
    demoUrl: '#',
    githubUrl: 'https://github.com/FernadoOXD/Todo-List',
    destacado: false,
    estado: 'Completado',
    metricas: '100% Score Lighthouse',
    caracteristicas: [
      'Gestión de tareas diarias',
      'Diseño UI/UX limpio y responsive'
    ]
  }
  
];
