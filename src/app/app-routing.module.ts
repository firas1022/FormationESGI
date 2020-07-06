import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuardService} from './auth-guard.service';
import {UnauthorizedComponent} from './unauthorized/unauthorized.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {path: ':id/:name', component: UserComponent}
    ]
  },
  // { path: 'users/:id/:name', component: UserComponent },
  {
    path: 'servers',
    component: ServersComponent,
    canActivate: [AuthGuardService],
    children: [
      {path: ':id', component: ServerComponent},
      {path: ':id/edit', component: EditServerComponent}
    ]
  },
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: 'unauthorised', component: UnauthorizedComponent},
  {path: '**', redirectTo: 'page-not-found'},
  // { path: 'servers/:id', component: ServerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
