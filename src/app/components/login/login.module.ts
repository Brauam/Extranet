import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppCommonModule } from "src/app/app-common.module";
import { LoginComponent } from "./login.component";
import { LoginRouting } from "./login.routing";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        AppCommonModule,
        LoginRouting
    ]
})
export class LoginModule { }
