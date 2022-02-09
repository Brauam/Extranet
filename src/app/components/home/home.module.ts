import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';
import { AppCommonModule } from 'src/app/app-common.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRouting,
    AppCommonModule
  ]
})
export class HomeModule { }
