import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppMaterialModule } from '../app-material.module';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    MainComponent
  ]
})
export class LayoutsAppModule { }
