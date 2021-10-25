import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppMaterialModule } from "./app-material.module";

@NgModule({
    exports: [
        AppMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule
    ],
    
})

export class AppCommonModule { }