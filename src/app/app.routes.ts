import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { UserComponent } from "./components/user/user.component";
import { USER_ROUTES } from "./components/user/user.route";

const ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "user/:id",
    component: UserComponent,
    children: USER_ROUTES
  },
  { path: "**", component: HomeComponent }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
