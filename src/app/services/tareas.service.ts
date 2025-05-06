import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  tareas: any[] = [];
  private tareasSubject = new BehaviorSubject<any[]>([]);

  constructor() {
    this.cargarTareas();
  }

  obtenerTareas$() {
    return this.tareasSubject.asObservable();
  }

  obtenerTareas() {
    return this.tareas;
  }

  agregarTarea(titulo: string) {
    const nuevaTarea = { id: Date.now(), titulo, completada: false };
    this.tareas.push(nuevaTarea);
    this.guardarTareas();
    this.tareasSubject.next([...this.tareas]);
  }

  actualizarTarea(tarea: any) {
    const tareaIndex = this.tareas.findIndex((t) => t.id === tarea.id);
    if (tareaIndex !== -1) {
      this.tareas[tareaIndex] = tarea;
      this.guardarTareas();
      this.tareasSubject.next([...this.tareas]);
    }
  }

  eliminarTarea(tarea: any) {
    this.tareas = this.tareas.filter((t) => t.id !== tarea.id);
    this.guardarTareas();
    this.tareasSubject.next([...this.tareas]);
  }

  guardarTareas() {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  cargarTareas() {
    if (localStorage.getItem('tareas')) {
      this.tareas = JSON.parse(localStorage.getItem('tareas')!);
    }
    this.tareasSubject.next([...this.tareas]);
  }
}
