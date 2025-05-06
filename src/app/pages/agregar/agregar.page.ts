import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonList,
  IonItem,
  IonInput,
  IonListHeader,
  IonLabel,
  IonCheckbox,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
} from '@ionic/angular/standalone';
import { TareasService } from 'src/app/services/tareas.service';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    CommonModule,
    IonInput,
    IonItem,
    IonList,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class AgregarPage implements OnInit {
  tareas: Tarea[] = []; // Ahora es un array de tareas, en lugar de una lista.
  nombreTarea: string = '';

  constructor(private _tareasService: TareasService) {
    // Solo cargamos las tareas, sin filtrar por ID si no es necesario
    this.tareas = this._tareasService.obtenerTareas();

    // Si no hay tareas cargadas, puedes inicializar algo aquí (opcional)
    if (!this.tareas.length) {
      console.log('No hay tareas disponibles');
    }
  }

  ngOnInit() {}

  agregarTarea() {
    if (this.nombreTarea.length === 0) {
      return;
    }
    // Crear una nueva tarea
    const nuevaTarea = new Tarea(this.nombreTarea);
    this.tareas.push(nuevaTarea);
    this.nombreTarea = ''; // Limpiar el input
    this._tareasService.guardarTareas(); // Guardar las tareas
  }

  cambioCheckbox(item: Tarea) {
    // Cambiar el estado completada de la tarea sin navegar a ninguna página
    item.completada = !item.completada;
    this._tareasService.guardarTareas(); // Guardar las tareas con el cambio
  }

  eliminarItem(i: number) {
    this.tareas.splice(i, 1);
    this._tareasService.guardarTareas(); // Guardar las tareas después de eliminar
  }
}
