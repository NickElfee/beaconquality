import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInformationComponent } from "../../dumb/user-information/user-information.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { UserDataComponent } from "./user-data.component";



@NgModule({
  declarations: [UserDataComponent, UserInformationComponent],
  exports: [
    UserDataComponent,
    UserInformationComponent,
  ],
  entryComponents: [UserDataComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
  ]
})
export class UserDataModule { }
