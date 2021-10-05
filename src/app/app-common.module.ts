import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppMaterialModule } from "./app-material.module";

@NgModule({
    exports: [
        AppMaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    
})

export class AppCommonModule { }