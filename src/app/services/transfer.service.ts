import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TransferService {

  constructor(private http: Http) { }

  transfer(sender: string, receiver: string, amount: number): Observable<string> {

    console.log( `Amount ${amount} transfered from bank ${sender} account ${sender}
                  to ${receiver} account ${receiver}` );

    const url = `http://91.194.90.29:8008/api/v1/accounts/transfer`;

    const body = {
      Sender: sender,
      Receiver: receiver,
      Amount: amount
    };

    return this.http.post( url, body )
    .map( ( response: Response ) => {
      const hash = response.json().TxHash as string;
      return hash;
    } )
    .catch( ( error: any ) => {
      console.error( error );
      return Observable.throw( error );
    } );

  }

}
