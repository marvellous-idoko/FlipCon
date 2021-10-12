import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-app-installer',
  templateUrl: './app-installer.component.html',
  styleUrls: ['./app-installer.component.css']
})
export class AppInstallerComponent  {

 
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) 
    public data: { mobileType: 'ios' | 'android' | 'os', promptEvent?: any },
    private bottomSheetRef: MatBottomSheetRef<AppInstallerComponent>
  ) {}

  public installPwa(): void {
    this.data.promptEvent.prompt();
    this.close();
  }

  public close() {
    this.bottomSheetRef.dismiss();
  }

}
