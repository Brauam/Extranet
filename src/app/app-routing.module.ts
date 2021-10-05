import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudesComponent } from './components/devoluciones/solicitudes/solicitudes.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './layouts/main/main.component';

const routes: Routes = [
  
  {
    path : 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path : '',
    component: MainComponent,
    data: { pageTitle: 'Home' },
    children: [
      {
        path : '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('src/app/components/home/home.module').then(m => m.HomeModule)
      }, 
      {
        path: 'devoluciones',
        loadChildren: () => import('src/app/components/devoluciones/devoluciones.module').then(m => m.DevolucionesModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
