import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SolicitudesComponent } from "./solicitudes/solicitudes.component";
import { SolicitudesdetalleComponent } from "./solicitudesdetalle/solicitudesdetalle.component";

const routes: Routes = [
    {
        path: 'solicitudes',
        component: SolicitudesComponent
    },
    {
        path: 'solicitudesdetalle/:id',
        component: SolicitudesdetalleComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DevolucionesRouting { }