import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../services/balance.service';
import { greenAccount } from '../shared/constants';


@Component({
  selector: 'app-green-bank',
  templateUrl: './green-bank.component.html',
  styleUrls: ['./green-bank.component.scss']
})
export class GreenBankComponent implements OnInit {


  balance: number;


  constructor(private balanceService: BalanceService ) {  }

  ngOnInit() {
    this.getBalance();
  }

  getBalance() {
    this.balanceService.getBalance(greenAccount)
    .subscribe(
      ( result: number ) => { this.balance = result; },
      ( error: any ) => { alert( 'something went wrong. Check console for errors' ); }
    );
  }

}
