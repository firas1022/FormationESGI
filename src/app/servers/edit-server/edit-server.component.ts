import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

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
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
