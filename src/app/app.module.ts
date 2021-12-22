import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

import {
  MatInputModule, 
  MatSelectModule,
   MatRadioModule,
   MatRippleModule,
  MatCardModule,
  MatExpansionModule,
  MatDatepickerModule, 
  MatNativeDateModule,
  MatButtonToggleModule,
  MatTabsModule,
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatSliderModule,
  MatTableModule,
  MatToolbarModule,
  MatListModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatBottomSheetModule,
  MatStepperModule,
  MatChipsModule,
  MatProgressBarModule,
  MatAutocompleteModule
  // MatBottomSheet, MatBottomSheetRef
} from '@angular/material';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {EnrollComponent}from './enroll/enroll.component'
import { EnrolComponent } from './enrol/enrol.component';
import { LoginComponent } from './login/login.component';
import { LoanComponent } from './loan/loan.component';
import { LoanStatusComponent } from './loan-status/loan-status.component';
import { DepositComponent } from './deposit/deposit.component';
import { VCComponent } from './vc/vc.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
// import { Angular4PaystackModule } from 'angular4-paystack';
import { CommonModule } from '@angular/common';
import { ChooserDirective } from './chooser.directive';
import { DisplayDirective } from './display.directive';
import { ButtonComponent } from './button/button.component';
import { ChooserComponent } from './chooser/chooser.component';
import { SterpayComponent } from './sterpay/sterpay.component';
import { GenComponent } from './gen/gen.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { BottomSheetOverviewExampleSheet } from "./loan-details/btmsheet";
import { NonComponent } from './non/non.component';
import { ProgressDirective } from './progress.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppInstallerComponent } from './app-installer/app-installer.component';
import {AppInstallerService} from './app-installer.service';
import { PayserviceDirective } from './payservice.directive';
import { PayLoanComponent } from './pay-loan/pay-loan.component';
import { SafePipe } from './safe.pipe';
import { BizComponent } from './vc/biz/biz.component';
import { VCTopNavComponent } from './vc/vctop-nav/vctop-nav.component';
import { VCSideNavComponent } from './vc/vcside-nav/vcside-nav.component';
import { MyoffersComponent } from './vc/myoffers/myoffers.component';
import { MyloansComponent } from './vc/myloans/myloans.component';
import { BizDetailsComponent } from './vc/biz-details/biz-details.component';
import { OfferDetailsComponent } from './vc/offer-details/offer-details.component';
import { EditproposalComponent } from './editproposal/editproposal.component';
import { FinanceComponent } from './vc/finance/finance.component';
import { MyDetailsComponent } from './vc/my-details/my-details.component'

const initializer = (pwaService: AppInstallerService) => 
() => pwaService.initPwaPrompt()

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnrolComponent,
    LoginComponent,
    LoanComponent,
    LoanStatusComponent,
    DepositComponent,
    VCComponent,
    ReceiptComponent,
    WithdrawComponent,
    ChooserDirective,
    DisplayDirective,
    ButtonComponent,
    ChooserComponent,
    SterpayComponent,
    GenComponent,
    LoanDetailsComponent,
    NonComponent,
    BottomSheetOverviewExampleSheet,
    ProgressDirective,
    EnrollComponent,
    AppInstallerComponent,
    PayserviceDirective,
    PayLoanComponent,
    SafePipe,
    BizComponent,
    VCTopNavComponent,
    VCSideNavComponent,
    MyoffersComponent,
    MyloansComponent,
    BizDetailsComponent,
    OfferDetailsComponent,
    EditproposalComponent,
    FinanceComponent,
    MyDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatListModule,
    FormsModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatExpansionModule,
    MatProgressSpinnerModule,   
    MatProgressBarModule,    
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatBottomSheetModule,
    MatStepperModule,
    MatCarouselModule.forRoot(),
    // Angular4PaystackModule.forRoot('pk_test_c5bc80647b60c1bf05f3f6fdac32a99f82b598ce'),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    
    ],
  exports:[BrowserAnimationsModule],
  providers: [  
    MatDatepickerModule,
    BrowserAnimationsModule ,
    {provide: APP_INITIALIZER, useFactory:initializer, 
       deps: [AppInstallerService], multi: true},
    AppInstallerComponent,
      
  ],
  entryComponents: [
    BottomSheetOverviewExampleSheet,
    AppInstallerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 


    // if (this.platform.ANDROID) {
    //   window.addEventListener('beforeinstallprompt', (event: any) => {
    //     event.preventDefault();
    //     this.promptEvent = event;
    //     this.openPromptComponent('android');
    //   });
    // }
    // if (this.platform.IOS) {
    //   const isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator['standalone']);
    //   if (!isInStandaloneMode) {
    //     this.openPromptComponent('ios');
    //   }
    // }
    // if(this.platform.isBrowser){
     
    //   window.addEventListener('beforeinstallprompt', (event: any) => {
    //     event.preventDefault();
    //     this.promptEvent = event;
    //     alert('Install FlipCon Now')
    //   });
     
    // }
  }