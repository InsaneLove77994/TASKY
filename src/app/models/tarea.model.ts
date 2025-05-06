
export class Tarea {
    id: number;
    titulo: string;
    completada: boolean;
  
    constructor(titulo: string) {
      this.id = new Date().getTime();
      this.titulo = titulo;
      this.completada = false;
    }
  }
  