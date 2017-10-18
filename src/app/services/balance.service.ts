import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BalanceService {

  constructor(private http: Http) { }

  getBalance(account: string): Observable<number> {

    const url = `http://91.194.90.29:8008/api/v1/accounts/${account}/balance`;

    return this.http.get( url )
    .map( ( response: Response ) => {
      const balance = response.json().Balance as number;
      return balance;
    } )
    .catch( ( error: any ) => {
      console.error( error );
      return Observable.throw( error );
    } );

  }


}
