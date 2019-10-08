import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatTabsModule, MatMenuModule, MatSidenavModule, MatButtonModule, MatToolbarModule,
            MatInputModule, MatIconModule, MatTooltipModule, MatDialogModule],
  exports: [MatTabsModule, MatMenuModule, MatSidenavModule, MatButtonModule, MatToolbarModule,
            MatInputModule, MatIconModule, MatTooltipModule, MatDialogModule]
})
export class CustomMaterialModule { }
