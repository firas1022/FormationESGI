import { LoggingService } from './core/logging.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountsService {

    constructor(private loggingService: LoggingService) {}

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

    addAccount(name: string, status: string) {
        this.accounts.push({name, status});
        this.loggingService.logStatusChange(status);
    }

    updateAccount(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}
