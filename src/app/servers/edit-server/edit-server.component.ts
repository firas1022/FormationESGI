import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, ParamMap, Router, UrlTree} from '@angular/router';
import {CanLeaveEditServer} from './can-leave-edit-server';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanLeaveEditServer {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  savedChanges = false;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.allowEdit = JSON.parse(this.route.snapshot.queryParamMap.get('editing'));
    this.route.queryParamMap.subscribe((queryParamMap) => {
      this.allowEdit = JSON.parse(queryParamMap.get('editing'));
    });
    const id = this.route.snapshot.paramMap.get('id');
    this.server = this.serversService.getServer(+id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.route.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.server = this.serversService.getServer(+paramMap.get('id'));
      }
    );
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.savedChanges = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canLeaveEditServer(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.allowEdit) {
      return true;
    }

    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.savedChanges) {
      return confirm('Etes vous sur de vouloir quitter sans sauvegarder ?');
    }

    return true;
  }

}
