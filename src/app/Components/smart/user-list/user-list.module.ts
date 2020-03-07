import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { UserListComponent } from "./user-list.component";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { UsersCardsComponent } from "../../dumb/users-cards/users-cards.component";



@NgModule({
  declarations: [UserListComponent, UsersCardsComponent],
  exports: [
    UserListComponent,
    UsersCardsComponent
  ],
  entryComponents: [UsersCardsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
  ]
})
export class UserListModule { }
