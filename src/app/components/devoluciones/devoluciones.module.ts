import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppCommonModule } from "src/app/app-common.module";
import { AppMaterialModule } from "src/app/app-material.module";
import { DevolucionesRouting } from "./devoluciones.routing";
import { SolicitudesComponent } from "./solicitudes/solicitudes.component";
import { SolicitudesdetalleComponent } from "./solicitudesdetalle/solicitudesdetalle.component";

@NgModule({
  declarations: [
    SolicitudesComponent,
    SolicitudesdetalleComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    AppCommonModule,
    DevolucionesRouting
  ]
})

export class DevolucionesModule { }
