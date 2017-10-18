import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlueBankComponent } from './blue-bank/blue-bank.component';
import { GreenBankComponent } from './green-bank/green-bank.component';

const routes: Routes = [
  {path: 'blue', component: BlueBankComponent},
  {path: 'green', component: GreenBankComponent},
  {path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
