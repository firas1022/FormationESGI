import {Observable} from 'rxjs';
import {UrlTree} from '@angular/router';

export interface CanLeaveEditServer {

  canLeaveEditServer: () => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}
