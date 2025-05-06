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
import { TareasService } from 'src/app/services/tareas.service';
import { ListaTareasComponent } from '../../components/lista-tareas/lista-tareas.component';

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
  constructor(
    public _tareasService: TareasService,
    private _router: Router,
    private alertController: AlertController
  ) {}

  async agregarTarea() {
    const alerta = await this.alertController.create({
      header: 'Nueva Tarea',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Crear',
          role: 'confirm',
          handler: (data) => {
            if (data.titulo.length === 0) {
              return;
            }
            const listaID = this._tareasService.agregarTarea(data.titulo);
          },
        },
      ],
      inputs: [
        {
          name: 'titulo',
          placeholder: 'Ingresa un nombre',
          type: 'text',
        },
      ],
    });

    alerta.present();
  }
}
