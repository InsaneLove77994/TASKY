import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  ViewChild,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import {
  IonList,
  IonItem,
  IonNote,
  IonLabel,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
} from '@ionic/angular/standalone';
import { TareasService } from 'src/app/services/tareas.service';
import { AlertController } from '@ionic/angular/standalone';
import { Subscription } from 'rxjs'; // NUEVO
import { CategoriasService } from 'src/app/services/categorias.service';


@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss'],
  imports: [
    IonList,
    IonItem,
    IonLabel,
    IonNote,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    CommonModule,
  ],
  standalone: true,
})
export class ListaTareasComponent implements OnInit, OnChanges, OnDestroy {
  @Input() completada: boolean = true;
  @ViewChild(IonList) ionList!: IonList;

  tareas: any[] = [];
  tareasSub!: Subscription; //

  constructor(
    public _tareasService: TareasService,
    private alertController: AlertController,
    private categoriasService: CategoriasService 
  ) {}

  ngOnInit() {
    this.suscribirseATareas(); // NUEVO
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['completada']) {
      this.filtrarTareas(); //
    }
  }

  ngOnDestroy() {
    if (this.tareasSub) {
      this.tareasSub.unsubscribe();
    }
  }

  suscribirseATareas() {
    this.tareasSub = this._tareasService.obtenerTareas$().subscribe((todas) => {
      this.tareas = todas.filter((t) => t.completada === this.completada);
    });
  }

  filtrarTareas() {
    const todas = this._tareasService.obtenerTareas();
    this.tareas = todas.filter((t) => t.completada === this.completada);
  }

  marcarTareaCompletada(tarea: any) {
    tarea.completada = !tarea.completada;
    this._tareasService.actualizarTarea(tarea);
  }

  eliminarTarea(tarea: any) {
    this._tareasService.eliminarTarea(tarea);
  }
  obtenerNombreCategoria(categoriaId?: number): string {
  if (!categoriaId) return 'Sin categoría';
  const categoria = this.categoriasService.obtenerCategorias()
    .find(cat => cat.id === categoriaId);
  return categoria?.nombre || 'Sin categoría';
}

  abrirTarea(tarea: any) {}
}
