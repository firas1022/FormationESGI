import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ServerModel} from './server.model';
import {Observable} from 'rxjs';
import {ServersService} from './servers.service';

@Injectable({
  providedIn: 'root'
})
export class ServersResolverService implements Resolve<ServerModel[]> {

  constructor(private serversService: ServersService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ServerModel[]> | Promise<ServerModel[]> | ServerModel[] {
    return this.serversService.getServers();
  }
}
