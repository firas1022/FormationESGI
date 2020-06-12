import { Component } from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountsService } from '../acconts-service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService,
              private accounstsService: AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // console.log('A server status changed, new status: ' + accountStatus);
    // const logService = new LoggingService();
    // logService.logStatusChange(accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
    this.accounstsService.addAccount(accountName, accountStatus);
  }
}
