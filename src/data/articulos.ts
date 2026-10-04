const defaultImg = '/img/ToArt/default_image.webp';

export interface SeccionArticulo {
  subtitulo?: string;
  parrafos?: string[];
  codigo?: {
    lenguaje: string;
    codigo: string;
  };
  codigoSecundario?: {
    lenguaje: string;
    codigo: string;
  };
  imagen?: {
    src?: string;
    alt: string;
    pieDeFoto?: string;
  };
  puntosClave?: string[];
  nota?: {
    tipo: 'tip' | 'info' | 'warning';
    texto: string;
  };
}

export interface Articulo {
  id: number;
  titulo: string;
  resumen: string;
  fecha: string;
  etiqueta: string;
  tiempoLectura: string;
  imagenCabecera?: string;
  secciones: SeccionArticulo[];
}

export const articulos: Articulo[] = [
  {
    id: 1,
    titulo: "Arquitectura MVC en la Web Moderna",
    resumen: "Descubre cómo el patrón Modelo-Vista-Controlador se adapta a las tecnologías actuales separando la lógica del frontend y backend.",
    fecha: "2026-09-15",
    etiqueta: "Arquitectura",
    tiempoLectura: "4 min",
    imagenCabecera: "/img/ToArt/Flujo_peticiones_MVC.webp",
    secciones: [
      {
        subtitulo: "1. La evolución del patrón MVC",
        parrafos: [
          "El patrón Modelo-Vista-Controlador (MVC) ha sido la columna vertebral del desarrollo de software durante décadas. Tradicionalmente concebido para aplicaciones monolíticas (como Ruby on Rails, Django o Laravel), en la web moderna ha evolucionado hacia un modelo desacoplado.",
          "En el ecosistema actual, el 'Modelo' y 'Controlador' residen comúnmente en servicios de backend o microservicios que exponen APIs REST o GraphQL, mientras que la 'Vista' se ha transformado en Single Page Applications (SPAs) reactivas desarrolladas con React, Vue o Angular."
        ],
        puntosClave: [
          "Modelo: Representa la estructura de datos, reglas de negocio y persistencia en base de datos.",
          "Vista: Renderiza la interfaz de usuario y captura eventos del usuario en el navegador.",
          "Controlador: Orquesta las solicitudes HTTP, aplica validaciones y coordina la respuesta."
        ]
      },
      {
        subtitulo: "2. Implementación de un Controlador moderno",
        parrafos: [
          "A continuación se ilustra cómo un controlador moderno en TypeScript/Express o NestJS procesa una petición delegando la lógica al modelo y devolviendo JSON estructurado:"
        ],
        codigo: {
          lenguaje: "TypeScript",
          codigo: `// controllers/userController.ts
import { Request, Response } from 'express';
import { UserService } from '../services/userService';

export class UserController {
  private userService = new UserService();

  async getProfile(req: Request, res: Response) {
    try {
      const userId = Number(req.params.id);
      const user = await this.userService.findUserById(userId);
      
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      
      return res.status(200).json({ data: user });
    } catch (error) {
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
}`
        },
        imagen: {
          src: '/img/ToArt/Flujo_peticiones_MVC.webp',
          alt: "Diagrama de arquitectura MVC desacoplada",
          pieDeFoto: "Figura 1: Flujo de peticiones entre Vista (SPA), Controlador (API Gateway) y Modelo (Base de Datos)."
        }
      },
      {
        subtitulo: "3. Conclusión y buenas prácticas",
        parrafos: [
          "Mantener las capas estrictamente separadas evita el código espagueti y facilita las pruebas unitarias. La vista nunca debe interactuar directamente con la base de datos, garantizando así la seguridad e integridad del sistema."
        ],
        nota: {
          tipo: "tip",
          texto: "Consejo: Utiliza DTOs (Data Transfer Objects) para validar estrictamente la entrada que recibe tu controlador antes de procesarla en el modelo."
        }
      }
    ]
  },
  {
    id: 2,
    titulo: "Por qué usar React con TypeScript",
    resumen: "El tipado estático en el frontend previene errores antes de compilar. Una guía rápida sobre las ventajas de integrar TypeScript en tus componentes de React.",
    fecha: "2026-09-14",
    etiqueta: "Frontend",
    tiempoLectura: "5 min",
    imagenCabecera: "/img/ToArt/React_init.webp",
    secciones: [
      {
        subtitulo: "1. La necesidad de TypeScript en proyectos escalables",
        parrafos: [
          "JavaScript es dinámico y flexible, pero en aplicaciones frontend de mediano y gran tamaño, esa flexibilidad a menudo conduce a errores en tiempo de ejecución como 'Cannot read properties of undefined'.",
          "TypeScript introduce un sistema de tipado estático que detecta inconsistencias durante la escritura del código y en tiempo de compilación, mejorando el autocompletado y facilitando el refactorizado."
        ]
      },
      {
        subtitulo: "2. Tipado de Props y Hooks en React",
        parrafos: [
          "Al definir interfaces claras para las propiedades de tus componentes, cualquier miembro del equipo puede saber de inmediato qué parámetros son obligatorios u opcionales:"
        ],
        codigo: {
          lenguaje: "TypeScript",
          codigo: `// components/UserCard.tsx
import React, { useState } from 'react';

interface UserCardProps {
  nombre: string;
  rol: 'admin' | 'editor' | 'viewer';
  activo?: boolean;
  onEditar: (id: string) => void;
}

export const UserCard: React.FC<UserCardProps> = ({ 
  nombre, 
  rol, 
  activo = true, 
  onEditar 
}) => {
  const [likes, setLikes] = useState<number>(0);

  return (
    <div className="p-4 border border-zinc-800 rounded-xl bg-zinc-900">
      <h4 className="font-bold text-white">{nombre}</h4>
      <span className="text-xs text-cyan-400 uppercase">{rol}</span>
      <p className="text-sm text-zinc-400">Estado: {activo ? 'En línea' : 'Desconectado'}</p>
      <button 
        onClick={() => setLikes((prev) => prev + 1)}
        className="mt-2 text-xs px-3 py-1 bg-cyan-500 text-black font-semibold rounded"
      >
        Likes: {likes}
      </button>
    </div>
  );
};`
        },
        imagen: {
          src: "/img/ToArt/Error_de_tipoJ_SX.webp",
          alt: "Autocompletado de TypeScript en React",
          pieDeFoto: "Figura 2: IntelliSense advirtiendo de tipos incompatibles en tiempo real."
        }
      },
      {
        subtitulo: "3. Beneficios inmediatos",
        puntosClave: [
          "Detección temprana de errores de tipeo y props faltantes.",
          "Autodocumentación del código sin necesidad de comentarios extensos.",
          "Refactorización segura en proyectos con múltiples desarrolladores."
        ],
        nota: {
          tipo: "tip",
          texto: "Configura el modo 'strict: true' en tu tsconfig.json para aprovechar al máximo la seguridad de tipos."
        }
      }
    ]
  },
  {
    id: 3,
    titulo: "Tailwind CSS: Estilos sin salir del HTML",
    resumen: "Cómo las clases de utilidad de Tailwind aceleran el desarrollo de interfaces (Views) manteniendo un diseño 100% responsivo y limpio.",
    fecha: "2026-09-13",
    etiqueta: "Frontend",
    tiempoLectura: "3 min",
    imagenCabecera: "/img/ToArt/TailwindCSS-HTML.webp",
    secciones: [
      {
        subtitulo: "1. La filosofía Utility-First",
        parrafos: [
          "A diferencia de frameworks tradicionales basados en componentes prefabricados como Bootstrap, Tailwind CSS ofrece clases atómicas de bajo nivel (como flex, pt-4, text-center, rotate-90) que te permiten construir diseños completamente personalizados sin escribir CSS personalizado.",
          "Gracias a su motor de compilación Just-In-Time (JIT), solo se genera el CSS de las clases que realmente utilizas en tus plantillas, logrando archivos CSS de producción diminutos (a menudo menores a 15 KB)."
        ]
      },
      {
        subtitulo: "2. Ejemplo de Configuración y Componente Responsivo",
        parrafos: [
          "Puedes extender la paleta de colores corporativa y definir fuentes personalizadas directamente en tu configuración:"
        ],
        codigo: {
          lenguaje: "JavaScript",
          codigo: `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ¡Esta línea escanea todos tus componentes!
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#06b6d4',
          dark: '#09090b',
        }
      }
    },
  },
  plugins: [],
};`
        },
        imagen: {
          src: "/img/image.png",
          alt: "Configuración de Tailwind CSS en proyecto",
          pieDeFoto: "Figura 3.1: Archivo tailwind.config.js configurado para escanear plantillas JSX/TSX."
        }
      },
      {
        subtitulo: "3. Clases de pseudoclases y Responsive Design",
        parrafos: [
          "Con prefijos como 'md:', 'lg:', 'hover:' y 'focus:', aplicar estados condicionales o diseño responsivo es inmediato:"
        ],
        codigo: {
          lenguaje: "HTML",
          codigo: `<button class="w-full md:w-auto px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold rounded-lg transition-transform transform hover:-translate-y-0.5">
  Comenzar Ahora
</button>`
        },
        imagen: {
          src: "/img/ToArt/Adaptabilidad_TailwindCSS.webp",
          alt: "Diseño Responsivo con Tailwind CSS",
          pieDeFoto: "Figura 3.2: Adaptabilidad fluida entre dispositivos móviles, tablets y escritorios."
        },
        nota: {
          tipo: "tip",
          texto: "Usa la extensión oficial 'Tailwind CSS IntelliSense' en VS Code para previsualizar colores y autocompletar clases al instante."
        }
      }
    ]
  },
  {
    id: 4,
    titulo: "Creando APIs ultrarrápidas con FastAPI",
    resumen: "Introducción a FastAPI y Python. Cómo estructurar endpoints eficientes y aprovechar la documentación automática para tus controladores.",
    fecha: "2026-09-12",
    etiqueta: "Backend",
    tiempoLectura: "6 min",
    imagenCabecera: "/img/ToArt/FastAPI_Python.webp",
    secciones: [
      {
        subtitulo: "1. ¿Por qué FastAPI es tan popular?",
        parrafos: [
          "FastAPI es un framework moderno y de alto rendimiento para construir APIs con Python 3.8+ basado en estándares abiertos como OpenAPI y JSON Schema.",
          "Su velocidad es comparable a NodeJS y Go gracias a que se ejecuta sobre servidores ASGI asíncronos como Starlette y Uvicorn, permitiendo manejar miles de conexiones simultáneas sin bloquear el hilo principal."
        ]
      },
      {
        subtitulo: "2. Creando un CRUD asíncrono con Pydantic",
        parrafos: [
          "Los esquemas de Pydantic permiten tipar y validar automáticamente el cuerpo de las peticiones HTTP entrantes:"
        ],
        codigo: {
          lenguaje: "Python",
          codigo: `from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, Field
from typing import List, Optional

app = FastAPI(title="Blog DEV API", version="1.0.0")

class PostSchema(BaseModel):
    title: str = Field(..., min_length=3, max_length=100)
    content: str
    tags: List[str] = []
    published: bool = True

@app.post("/api/posts", status_code=status.HTTP_201_CREATED)
async def create_post(post: PostSchema):
    # Simulación de inserción en base de datos asíncrona
    return {"message": "Post creado exitosamente", "data": post}`
        },
        imagen: {
          src: "/img/ToArt/swagger_docs.webp",
          alt: "Interfaz interactiva de Swagger UI en FastAPI",
          pieDeFoto: "Figura 4: Documentación Swagger accesible automáticamente en la ruta /docs."
        }
      },
      {
        subtitulo: "3. Documentación interactiva out-of-the-box",
        parrafos: [
          "Una de las mayores ventajas es que al arrancar la aplicación, FastAPI genera automáticamente una interfaz Swagger UI interactiva en '/docs' y ReDoc en '/redoc', permitiendo probar cada endpoint directamente desde el navegador."
        ]
      }
    ]
  },
  {
    id: 5,
    titulo: "PostgreSQL vs MongoDB: ¿Cuál elegir?",
    resumen: "Una comparativa directa entre bases de datos relacionales y no relacionales para entender qué modelo de datos conviene según el proyecto.",
    fecha: "2026-09-11",
    etiqueta: "Bases de Datos",
    tiempoLectura: "5 min",
    imagenCabecera: defaultImg,
    secciones: [
      {
        subtitulo: "1. Modelos de datos: Tablas vs Documentos",
        parrafos: [
          "La elección de la base de datos es una de las decisiones arquitectónicas más cruciales al iniciar un proyecto de software.",
          "PostgreSQL es un motor relacional objeto-relacional líder que garantiza integridad ACID estricta mediante esquemas predefinidos, llaves foráneas y potentes consultas SQL. MongoDB, por su parte, almacena registros como documentos BSON flexibles sin esquema rígido."
        ]
      },
      {
        subtitulo: "2. Comparativa de estructuras",
        codigo: {
          lenguaje: "SQL",
          codigo: `-- PostgreSQL: Esquema estricto y relacional
CREATE TABLE articulos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    autor_id INT REFERENCES autores(id),
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`
        },
        codigoSecundario: {
          lenguaje: "JSON",
          codigo: `// MongoDB: Documento flexible e incrustado
{
  "_id": "6508d2f1a9b",
  "titulo": "PostgreSQL vs MongoDB",
  "autor": {
    "nombre": "Fernando",
    "email": "fernando@example.com"
  },
  "tags": ["sql", "nosql", "database"],
  "comentarios": [
    { "usuario": "Carlos", "texto": "Gran comparativa" }
  ]
}`
        } as any,
        imagen: {
          src: defaultImg,
          alt: "Comparativa entre PostgreSQL y MongoDB",
          pieDeFoto: "Figura 5: Tablas normalizadas vs Documentos jerárquicos incrustados."
        }
      },
      {
        subtitulo: "3. Criterios de decisión",
        puntosClave: [
          "Elige PostgreSQL cuando requieras transacciones financieras, relaciones complejas entre entidades o análisis relacional profundo.",
          "Elige MongoDB cuando los datos no tengan un esquema fijo, cambien constantemente o necesites escalar horizontalmente mediante sharding de forma rápida."
        ]
      }
    ]
  },
  {
    id: 6,
    titulo: "AWS para Estudiantes: EC2 vs S3",
    resumen: "Cuándo utilizar un servidor virtual (EC2) para alojar tu lógica de negocio y cuándo usar S3 para servir páginas HTML estáticas.",
    fecha: "2026-09-10",
    etiqueta: "Despliegue",
    tiempoLectura: "4 min",
    imagenCabecera: defaultImg,
    secciones: [
      {
        subtitulo: "1. Comprendiendo la nube de Amazon Web Services",
        parrafos: [
          "Para estudiantes y desarrolladores que inician en AWS, la gran cantidad de servicios puede resultar abrumadora. Sin embargo, Amazon EC2 y Amazon S3 son los dos pilares fundamentales que todo desarrollador debe dominar."
        ]
      },
      {
        subtitulo: "2. Amazon EC2: Cómputo flexible (IaaS)",
        parrafos: [
          "EC2 (Elastic Compute Cloud) es una máquina virtual en la nube. Tienes acceso completo por SSH al sistema operativo (generalmente Linux Ubuntu o Amazon Linux) y puedes instalar Node.js, Python, bases de datos o contenedores Docker.",
          "Es ideal para hospedar tus servidores de backend o tareas continuas que requieren procesamiento de CPU constante."
        ],
        codigo: {
          lenguaje: "Bash",
          codigo: `# Conectarse a una instancia EC2 por SSH
ssh -i "mi-llave-aws.pem" ubuntu@ec2-54-200-10-5.compute-1.amazonaws.com

# Clonar repositorio e iniciar servidor Node.js
git clone https://github.com/usuario/mi-backend.git
cd mi-backend && npm install && pm2 start server.js`
        }
      },
      {
        subtitulo: "3. Amazon S3: Almacenamiento de Objetos y Hosting Estático",
        parrafos: [
          "S3 (Simple Storage Service) no es un servidor, sino un servicio serverless de almacenamiento de archivos. Permite habilitar 'Static Website Hosting' para servir aplicaciones React, Vue o sitios HTML por una fracción del costo de un servidor EC2."
        ],
        imagen: {
          src: defaultImg,
          alt: "Arquitectura AWS EC2 + S3",
          pieDeFoto: "Figura 6: Frontend servido desde Amazon S3 conectado a API en Amazon EC2."
        },
        nota: {
          tipo: "tip",
          texto: "Aprovecha la capa gratuita de AWS (Free Tier) que incluye 750 horas mensuales de instancias t2.micro / t3.micro en EC2 y 5 GB de almacenamiento estándar en S3."
        }
      }
    ]
  },
  {
    id: 7,
    titulo: "Automatizando despliegues con GitHub Actions",
    resumen: "Deja de subir archivos manualmente. Aprende a configurar un pipeline de CI/CD para enviar tu código a producción con cada commit.",
    fecha: "2026-09-09",
    etiqueta: "DevOps",
    tiempoLectura: "5 min",
    imagenCabecera: defaultImg,
    secciones: [
      {
        subtitulo: "1. ¿Qué es CI/CD y por qué es indispensable?",
        parrafos: [
          "La Integración Continua (CI) y el Despliegue Continuo (CD) son prácticas que automatizan la validación, prueba y publicación de tu software cada vez que envías cambios al repositorio.",
          "GitHub Actions permite crear flujos de trabajo (workflows) definidos en archivos YAML que se ejecutan automáticamente en servidores proporcionados por GitHub."
        ]
      },
      {
        subtitulo: "2. Creando tu primer archivo de Workflow",
        parrafos: [
          "Crea el archivo en la ruta '.github/workflows/ci-cd.yml' de tu repositorio para compilar y probar tu proyecto React:"
        ],
        codigo: {
          lenguaje: "YAML",
          codigo: `name: Build & Test Workflow

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
    - name: Clonar código
      uses: actions/checkout@v4

    - name: Configurar Node.js
      uses: actions/setup-node@v4
      with:
        node-version: 20
        cache: 'npm'

    - name: Instalar dependencias
      run: npm ci

    - name: Verificar tipos y compilar
      run: npm run build`
        },
        imagen: {
          src: defaultImg,
          alt: "Pipeline de GitHub Actions en ejecución",
          pieDeFoto: "Figura 7: Estado de los jobs de CI/CD verificando cada pull request."
        }
      },
      {
        subtitulo: "3. Beneficios inmediatos",
        puntosClave: [
          "Garantiza que ningún código roto llegue a la rama principal.",
          "Despliegues automáticos a plataformas como Vercel, Netlify, AWS o DigitalOcean.",
          "Ahorro de horas de trabajo manual en tareas repetitivas de testing y build."
        ]
      }
    ]
  },
  {
    id: 8,
    titulo: "Pruebas de API con Postman",
    resumen: "Las mejores prácticas para probar tus rutas de backend, enviar parámetros y verificar respuestas JSON antes de conectar el frontend.",
    fecha: "2026-09-08",
    etiqueta: "Herramientas",
    tiempoLectura: "3 min",
    imagenCabecera: defaultImg,
    secciones: [
      {
        subtitulo: "1. Más allá de simples peticiones GET y POST",
        parrafos: [
          "Postman es la herramienta estándar de la industria para el diseño, depuración y prueba automatizada de APIs REST.",
          "Muchos desarrolladores solo la usan para enviar peticiones manuales, pero su verdadero poder reside en el uso de Colecciones, Variables de Entorno y Scripts de Prueba en JavaScript."
        ]
      },
      {
        subtitulo: "2. Escribiendo pruebas automatizadas en la pestaña 'Tests'",
        parrafos: [
          "Puedes escribir aserciones que verifiquen el código de estado HTTP, los tiempos de respuesta y la estructura del payload JSON:"
        ],
        codigo: {
          lenguaje: "JavaScript",
          codigo: `// Scripts de validación en la pestaña Tests de Postman
pm.test("Status code es 200 OK", function () {
    pm.response.to.have.status(200);
});

pm.test("La respuesta contiene datos de usuario válidos", function () {
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.have.property("data");
    pm.expect(responseJson.data.email).to.include("@");
    pm.expect(responseJson.data.id).to.be.a("number");
});

pm.test("Tiempo de respuesta menor a 300ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(300);
});`
        },
        imagen: {
          src: defaultImg,
          alt: "Ejecución de pruebas automatizadas en Postman",
          pieDeFoto: "Figura 8: Runner de colecciones validando múltiples endpoints en serie."
        }
      },
      {
        subtitulo: "3. Variables de entorno dinámicas",
        parrafos: [
          "Define entornos como 'Localhost', 'Staging' y 'Production' para cambiar la URL base {{base_url}} y tokens de autenticación {{bearer_token}} sin modificar las peticiones guardadas."
        ]
      }
    ]
  },
  {
    id: 9,
    titulo: "Prompt Engineering en el Código",
    resumen: "Técnicas para dar instrucciones precisas a asistentes como Copilot y acelerar la escritura de código sin perder el control de la arquitectura.",
    fecha: "2026-09-07",
    etiqueta: "Productividad",
    tiempoLectura: "4 min",
    imagenCabecera: defaultImg,
    secciones: [
      {
        subtitulo: "1. El rol del desarrollador en la era de la IA",
        parrafos: [
          "Los asistentes de código con Inteligencia Artificial (como GitHub Copilot, Claude o Gemini) son multiplicadores de productividad, pero la calidad del código generado depende directamente de la claridad del contexto y las directrices proporcionadas.",
          "El 'Prompt Engineering' para desarrolladores consiste en estructurar especificaciones técnicas claras: tipos, restricciones, patrones esperados y casos borde."
        ]
      },
      {
        subtitulo: "2. Anatomía de un Prompt técnico de alto impacto",
        parrafos: [
          "En lugar de pedir 'hazme una función de login', una instrucción estructurada produce código listo para producción:"
        ],
        codigo: {
          lenguaje: "Markdown",
          codigo: `### Contexto:
Estamos en una aplicación React 19 con TypeScript y Tailwind CSS.

### Tarea:
Escribe un Custom Hook llamado \`useFetchArticles\`.

### Requisitos:
1. Recibir como parámetro opcional un \`searchQuery: string\`.
2. Retornar \`{ data: Articulo[], isLoading: boolean, error: string | null }\`.
3. Implementar un debounce de 300ms para evitar peticiones excesivas.
4. Manejar el estado de cancelación si el componente se desmonta.`
        },
        imagen: {
          src: defaultImg,
          alt: "Flujo de desarrollo asistido con IA",
          pieDeFoto: "Figura 9: Iteración rápida de código mediante especificaciones contextuales."
        }
      },
      {
        subtitulo: "3. Regla de oro",
        parrafos: [
          "Nunca aceptes código generado sin antes entender línea por línea su funcionamiento, validar su seguridad y comprobar que cumple con los estándares arquitectónicos de tu proyecto."
        ]
      }
    ]
  },
  {
    id: 10,
    titulo: "El poder del Serverless con AWS Lambda",
    resumen: "Explorando la ejecución de funciones bajo demanda sin administrar servidores. Una alternativa moderna para microservicios.",
    fecha: "2026-09-06",
    etiqueta: "Despliegue",
    tiempoLectura: "5 min",
    imagenCabecera: defaultImg,
    secciones: [
      {
        subtitulo: "1. ¿Qué significa realmente 'Serverless'?",
        parrafos: [
          "Serverless no significa que no existan servidores, sino que el desarrollador no tiene que aprovisionar, configurar ni administrar máquinas físicas o virtuales.",
          "AWS Lambda ejecuta fragmentos de código (funciones) únicamente cuando ocurre un evento desencadenante (como una subida de archivo a S3, una petición HTTP mediante API Gateway o un mensaje en una cola SQS), cobrando estrictamente por los milisegundos de cómputo utilizados."
        ]
      },
      {
        subtitulo: "2. Ejemplo de función Lambda en TypeScript",
        parrafos: [
          "A continuación se presenta un handler de Lambda que procesa eventos de API Gateway y retorna respuestas HTTP estructuradas:"
        ],
        codigo: {
          lenguaje: "TypeScript",
          codigo: `// lambda/processPayment.ts
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const body = event.body ? JSON.parse(event.body) : {};
    
    // Validación básica de entrada
    if (!body.monto || body.monto <= 0) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "El monto debe ser mayor a 0" }),
      };
    }

    // Procesamiento del evento
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "success", transactionId: "tx_998124" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error interno en la función" }),
    };
  }
};`
        },
        imagen: {
          src: defaultImg,
          alt: "Arquitectura Serverless con AWS Lambda y API Gateway",
          pieDeFoto: "Figura 10: Eventos activando funciones Lambda escalables de 0 a miles de ejecuciones concurrentes."
        }
      },
      {
        subtitulo: "3. Ventajas y consideraciones",
        puntosClave: [
          "Escalabilidad automática e instantánea desde 1 petición hasta decenas de miles.",
          "Costo cero cuando la aplicación está inactiva (a diferencia de un servidor EC2 que cobra 24/7).",
          "Consideración: Ten en cuenta el 'Cold Start' (tiempo de inicio en frío) al elegir el runtime y tamaño de memoria de la función."
        ]
      }
    ]
  }
];
