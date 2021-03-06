import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCommonModule } from './app-common.module';
import { HttpClientModule } from '@angular/common/http';
import { MatStepperModule } from '@angular/material/stepper';
import { LayoutsAppModule } from './layouts/layouts-app.module';

@NgModule({
  declarations: [			
    AppComponent,
   ],
  imports: [
    MatStepperModule,
    AppCommonModule,
    BrowserModule,
    AppRoutingModule,
    LayoutsAppModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [{
    provide: MAT_DATE_LOCALE, useValue:'es-PE'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
