import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppMaterialModule } from "src/app/app-material.module";
import { LoginComponent } from "./login.component";
import { LoginRouting } from "./login.routing";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        LoginRouting
    ]
})
export class LoginModule { }