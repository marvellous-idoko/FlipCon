import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepositComponent } from './deposit/deposit.component';
import { EnrolComponent } from './enrol/enrol.component';
import { GenComponent } from './gen/gen.component';
import { HomeComponent } from "./home/home.component";
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { LoanStatusComponent } from './loan-status/loan-status.component';
import { LoanComponent } from './loan/loan.component';
import { LoginComponent } from './login/login.component';
import { NonComponent } from './non/non.component';
import { PayLoanComponent } from './pay-loan/pay-loan.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { VCComponent } from './vc/vc.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  { path: '', redirectTo: 'gen', pathMatch: 'full' },
 { path: 'home', component: HomeComponent, data: {animation: 'Home'}},
 { path: 'gen', component: GenComponent},
 { path: 'enrol', component: EnrolComponent, data: {animation: 'enrol'}},
 { path: 'login', component: LoginComponent, data: {animation: 'login'}},
 { path: 'loan', component: LoanComponent, data: {animation: 'loan'}},
 { path: 'loanstatus', component: LoanStatusComponent, data: {animation: 'loanstatus'}},
 { path: 'deposit', component: DepositComponent, data: {animation: 'deposit'}},
 { path: 'withdraw', component: WithdrawComponent, data: {animation: 'withdraw'}},
 { path: 'account_balance', component: ReceiptComponent, data: {animation: 'receipt'}},
 { path: 'VC', component: VCComponent, data: {animation: 'VC'}},
 { path:'loan-details/:id', component: LoanDetailsComponent, data: {animation: 'loan-details'}},
 { path:'payloan', component: PayLoanComponent, data: {animation: 'loan-details'}},
 { path:'profile', component: NonComponent, data: {animation: 'profile'}}
]
@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
