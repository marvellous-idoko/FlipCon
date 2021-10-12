import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { Platform } from '@angular/cdk/platform';
import { AppInstallerComponent } from './app-installer/app-installer.component';

@Injectable({
  providedIn: 'root'
})
export class AppInstallerService {
  private promptEvent: any;

  constructor(
    private bottomSheet: MatBottomSheet,
    private platform: Platform
  ) { }

  public  initPwaPrompt() {
    if (this.platform.ANDROID) {
      window.addEventListener('beforeinstallprompt', (event: any) => {
        event.preventDefault();
        this.promptEvent = event;
        this.openPromptComponent('android');
      });
    }
    if (this.platform.IOS) {
      const isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator['standalone']);
      if (!isInStandaloneMode) {
        this.openPromptComponent('ios');
      }
    }
    if(this.platform.isBrowser){
     
      window.addEventListener('beforeinstallprompt', (event: any) => {
        event.preventDefault();
        this.promptEvent = event;
        // alert('Install FlipCon Now')
        this.openPromptComponent('os');

      });
     
    }
  }

  private openPromptComponent(mobileType: 'ios' | 'android' | 'os') {
    timer(3000)
      .pipe(take(1))
      .subscribe(() => this.bottomSheet.open(AppInstallerComponent, 
        { data: { mobileType, promptEvent: this.promptEvent } }));
  }
}