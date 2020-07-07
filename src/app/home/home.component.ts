import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(18, 1, 2020)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(28, 2, 2019)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(5, 5, 2018)
    },
    {
      instanceType: 'small',
      name: 'Test Server',
      status: 'stable',
      started: new Date(1, 6, 2017)
    }
  ];

  constructor() {
  }

  ngOnInit() {
    of(this.servers).pipe(
      map(servers => servers.length)
    ).subscribe(length => console.log(length));
  }

  getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
}
