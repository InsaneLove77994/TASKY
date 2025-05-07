import { Component } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Categoria } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class CategoriasPage {
  categorias: Categoria[] = [];

  constructor(
    private alertController: AlertController,
    private _categoriasService: CategoriasService
  ) {}

  ionViewWillEnter() {
    this.categorias = this._categoriasService.obtenerCategorias();
  }

  async agregarCategoria() {
    const alerta = await this.alertController.create({
      header: 'Nueva Categoría',
      inputs: [
        { name: 'nombre', type: 'text', placeholder: 'Nombre de la categoría' }
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Crear',
          handler: (data) => {
            if (data.nombre.trim().length > 0) {
              this._categoriasService.crearCategoria(data.nombre.trim());
              this.categorias = this._categoriasService.obtenerCategorias();
            }
          }
        }
      ]
    });
    await alerta.present();
  }

  async editarCategoria(categoria: Categoria) {
    const alerta = await this.alertController.create({
      header: 'Editar Categoría',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          value: categoria.nombre,
          placeholder: 'Nuevo nombre'
        }
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Guardar',
          handler: (data) => {
            if (data.nombre.trim().length > 0) {
              this._categoriasService.editarCategoria(categoria.id, data.nombre.trim());
              this.categorias = this._categoriasService.obtenerCategorias();
            }
          }
        }
      ]
    });
    await alerta.present();
  }

  eliminarCategoria(categoria: Categoria) {
    this._categoriasService.eliminarCategoria(categoria.id);
    this.categorias = this._categoriasService.obtenerCategorias();
  }
}

