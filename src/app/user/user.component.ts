import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {interval, Observable, Observer, Subscription} from 'rxjs';
import {UserService} from '../user.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  id: number;
  numbersSubscription: Subscription;
  observableFromScratchSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );

    const numbers = interval(1000).pipe(
      map(data => data * 2)
    );

    this.numbersSubscription = numbers.subscribe(
      (num: number) => console.log(num)
    );

    const observableFromScratch = new Observable((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('premier package dinformations');
      }, 2000);
      setTimeout(() => {
        observer.next('deuxieme package dinformations');
      }, 4000);
      setTimeout(() => {
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('troisieme pack');
      }, 6000);
    });

    this.observableFromScratchSubscription = observableFromScratch.subscribe(
      (data: string) => console.log(data),
      (error: string) => console.log(error),
      () => console.log('observable complete')
    );

  }

  ngOnDestroy() {
    this.numbersSubscription.unsubscribe();
    this.observableFromScratchSubscription.unsubscribe();
  }

  onActivate() {
    this.userService.activated.next(this.id);
  }
}
