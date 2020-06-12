import { Component, OnInit } from '@angular/core';
import { AccountsService } from './acconts-service';
import { AccountHttpServiceService } from './account-http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit{

  title = 'service-demo';
  accounts: {name: string, status: string}[] = []

  constructor(private accountsService: AccountsService,
              private accountHttpService: AccountHttpServiceService) {}

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }

  onSave() {
    // sauvegarder la liste des compte
    this.accountHttpService.saveAccounts(this.accounts).subscribe(
      (response: Response) => console.log(response),
      (error: Error) => console.log(error)
    )
  }
  // accounts = [
  //   {
  //     name: 'Master Account',
  //     status: 'active'
  //   },
  //   {
  //     name: 'Testaccount',
  //     status: 'inactive'
  //   },
  //   {
  //     name: 'Hidden Account',
  //     status: 'unknown'
  //   }
  // ];

  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
}
