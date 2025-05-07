import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import { TareasService } from './tareas.service'; 

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  categorias: Categoria[] = [];

  constructor(private tareasService: TareasService) {
    this.cargarCategorias();
  }

  crearCategoria(nombre: string) {
    const nueva = new Categoria(nombre);
    this.categorias.push(nueva);
    this.guardarCategorias();
    return nueva;
  }

  editarCategoria(id: number, nuevoNombre: string) {
    const categoria = this.categorias.find(cat => cat.id === id);
    if (categoria) {
      categoria.nombre = nuevoNombre;
      this.guardarCategorias();
    }
  }

  eliminarCategoria(id: number) {
    this.categorias = this.categorias.filter(cat => cat.id !== id);
    this.guardarCategorias();

    // Notificar al servicio de tareas para actualizar
    this.tareasService.removerCategoriaDeTareas(id);
  }

  obtenerCategorias(): Categoria[] {
    return [...this.categorias];
  }

  private guardarCategorias() {
    localStorage.setItem('categorias', JSON.stringify(this.categorias));
  }

  private cargarCategorias() {
    const data = localStorage.getItem('categorias');
    if (data) {
      this.categorias = JSON.parse(data);
    }
  }
}
