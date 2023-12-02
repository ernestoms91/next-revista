export const informaciones = [
  {
    titulo: "Introducción a la programación",
    imagen: "https://plus.unsplash.com/premium_photo-1663047060215-eaf3846564a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    informacion:
      "Un libro introductorio sobre programación para principiantes. Cubre conceptos básicos como variables, bucles y funciones, y proporciona ejemplos prácticos para ayudar a los lectores a comprender los fundamentos de la programación.",
    autor: "John Smith",
  },
  {
    titulo: "Recetas saludables",
    imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    informacion:
      "Una colección de recetas nutritivas y equilibradas. El libro incluye opciones para vegetarianos, veganos y personas con restricciones dietéticas. Cada receta viene con instrucciones detalladas y consejos para una preparación exitosa.",
    autor: "Ana García",
  },
  {
    titulo: "El arte de la fotografía",
    imagen: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    informacion:
      "Un libro que explora los fundamentos y técnicas de la fotografía. Desde la composición y la iluminación hasta el procesamiento de imágenes, este libro brinda a los lectores una comprensión completa de los aspectos clave de la fotografía y les ayuda a mejorar sus habilidades.",
    autor: "Carlos López",
  },
  {
    titulo: "Historia del antiguo Egipto",
    imagen: "https://images.unsplash.com/photo-1605122599108-07a515e5e820?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    informacion:
      "Un estudio completo sobre la civilización del antiguo Egipto. Explora los faraones, las pirámides, las creencias religiosas y la vida cotidiana en esa época fascinante. Con ilustraciones y referencias históricas, este libro ofrece una visión profunda de la historia del antiguo Egipto.",
    autor: "María Rodríguez",
  },
  {
    titulo: "Guía de viaje a París",
    imagen: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    informacion:
      "Una guía detallada de los mejores lugares para visitar en París. Desde la Torre Eiffel hasta el Louvre y los encantadores cafés parisinos, esta guía proporciona informacion práctica y recomendaciones para que los viajeros disfruten al máximo su estancia en la ciudad del amor.",
    autor: "David Torres",
  },
];

interface Iprop  {
  titulo: string;
  imagen: string;
  descripcion: string;
  fecha: string;
  duracion: number;
}

export const podcasts = [
  {
    titulo: "Viaje a París desde el mas alla, donde lo desconocido esta al alcance",
    imagen: "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Explora la belleza de la Ciudad de la Luz",
    fecha: "2023-11-29",
    duracion: 7
  },
  {
    titulo: "Curso de programación orientada a objetos",
    imagen: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Aprende a programar desde cero",
    fecha: "2023-11-01",
    duracion: 30
  },
  {
    titulo: "Concierto de rock en la sala Cuba",
    imagen: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Disfruta de una noche llena de música y energía",
    fecha: "2023-11-05",
    duracion: 2
  }
];
