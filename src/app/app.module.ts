import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./+state/global.reducers";
import { routing } from "./app.routing";
import { NxModule } from "@nrwl/angular";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { UserListModule } from "./Components/smart/user-list/user-list.module";
import { UserDataModule } from "./Components/smart/user-data/user-data.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    routing,
    NxModule.forRoot(),
    StoreModule.forRoot(
      reducers,
    ),
    StoreDevtoolsModule.instrument(),
    UserListModule,
    UserDataModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
