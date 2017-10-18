import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../services/balance.service';
import { TransferService } from '../services/transfer.service';
import { AccountModel } from '../models/account.model';
import { blueAccount, greenAccount } from '../shared/constants';

@Component({
  selector: 'app-blue-bank',
  templateUrl: './blue-bank.component.html',
  styleUrls: ['./blue-bank.component.scss']
})
export class BlueBankComponent implements OnInit {

  amount: number;
  balance: number;
  hash: string;

  private balanceService: BalanceService;
  private transferService: TransferService;

  constructor( balanceService: BalanceService,
               transferService: TransferService ) {

    this.balanceService = balanceService;
    this.transferService = transferService;
  }

  ngOnInit() {
    this.getBalance();
  }

  transfer() {

    this.transferService.transfer( blueAccount, greenAccount, this.amount)
    .subscribe(
      ( hash: string ) => {
        this.hash = hash;
        console.log(`Transfer completed with hash ${this.hash}`);
      },
      (error: any) => {
        console.error(error);
      }
    );

    this.getBalance();
  }

  getBalance() {
    this.balanceService.getBalance(blueAccount)
    .subscribe(
      ( result: number ) => { this.balance = result; },
      ( error: any ) => { alert( 'something went wrong. Check console for errors' ); }
    );
  }

}
