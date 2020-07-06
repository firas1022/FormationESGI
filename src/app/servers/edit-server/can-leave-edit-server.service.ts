import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {CanLeaveEditServer} from './can-leave-edit-server';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanLeaveEditServerService implements CanDeactivate<CanLeaveEditServer> {

  constructor() {
  }

  canDeactivate(component: CanLeaveEditServer,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canLeaveEditServer();
  }
}
