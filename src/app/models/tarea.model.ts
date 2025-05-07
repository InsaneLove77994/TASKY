
export class Tarea {
  id: number;
  titulo: string;
  completada: boolean;
  categoriaId?: number; // ID de la categoría

  constructor(titulo: string, categoriaId?: number) {
    this.id = new Date().getTime();
    this.titulo = titulo;
    this.completada = false;
    this.categoriaId = categoriaId;
  }
}
  