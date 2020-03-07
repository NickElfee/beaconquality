import { RouterModule, Routes } from "@angular/router";
import { UserDataComponent } from "./Components/smart/user-data/user-data.component";
import { UserListComponent } from "./Components/smart/user-list/user-list.component";

const routes: Routes = [
  {path: '', component: UserListComponent, children: [

    ]
  },
  {path: ':id', component: UserDataComponent}
];

export const routing = RouterModule.forRoot(routes);
