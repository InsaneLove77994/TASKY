import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { TareasService } from 'src/app/services/tareas.service';
import { ListaTareasComponent } from "../../components/lista-tareas/lista-tareas.component";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ListaTareasComponent]
})
export class Tab2Page {

  constructor( private _tareasService: TareasService ) {}

}
