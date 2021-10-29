import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionComponent } from './components/login/autenticacion/autenticacion.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './layouts/main/main.component';

const routes: Routes = [

  {
    path : '',
    loadChildren: () => import('src/app/components/login/login.module').then(m => m.LoginModule),
    component: AutenticacionComponent,
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
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
