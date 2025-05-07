import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular/standalone';
import { AlertInput } from '@ionic/angular';
import { TareasService } from 'src/app/services/tareas.service';
import { ListaTareasComponent } from '../../components/lista-tareas/lista-tareas.component';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Categoria } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonIcon,
    IonFabButton,
    IonFab,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    CommonModule,
    ListaTareasComponent,
  ],
})
export class Tab1Page {
  categorias: Categoria[] = [];

  constructor(
    public _tareasService: TareasService,
    private _router: Router,
    private alertController: AlertController,
    private categoriasService: CategoriasService
  ) {
    this.categorias = this.categoriasService.obtenerCategorias();
  }

  
  async agregarTarea() {
    // Paso 1: pedir el nombre
    const nombreAlert = await this.alertController.create({
      header: 'Nueva tarea',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Ingresa el nombre de la tarea',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Siguiente',
          handler: (data) => {
            const titulo = data.titulo?.trim();
            if (titulo) {
              this.presentarAlertaCategorias(titulo); // pasa el título a la siguiente alerta
            }
          },
        },
      ],
    });
  
    await nombreAlert.present();
  }
  
  async presentarAlertaCategorias(titulo: string) {
    this.categorias = this.categoriasService.obtenerCategorias();
    const inputs: AlertInput[] = this.categorias.map((cat) => ({
      type: 'radio' as const,
      label: cat.nombre,
      value: cat.id,
    }));
  
    const categoriaAlert = await this.alertController.create({
      header: 'Selecciona una categoría',
      inputs,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Crear',
          handler: (categoriaId) => {
            if (categoriaId) {
              // Obtener el nombre de la categoría seleccionada
              const categoriaSeleccionada = this.categorias.find(
                (cat) => cat.id === categoriaId
              );
  
              // Pasar el nombre de la categoría al servicio
              if (categoriaSeleccionada) {
                this._tareasService.agregarTarea(titulo, categoriaId, categoriaSeleccionada.nombre);
              }
            }
          },
        },
      ],
    });
  
    await categoriaAlert.present();
  }
}