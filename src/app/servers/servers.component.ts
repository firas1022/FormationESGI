import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';
import {ServerModel} from './server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: ServerModel[] = [];

  constructor(private serversService: ServersService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const serversKeyResolver = 'servers';
    this.servers = this.route.snapshot.data[serversKeyResolver];
    // this.serversService.getServers().subscribe((serverList) => {
    //   this.servers = serverList;
    // });
  }

  reloadTheCurrentPath() {
    this.router.navigate(['../servers'], {relativeTo: this.route});
  }

}
