import { NgModule } from '@angular/core';
import { InterpolayComponent } from './interpolay.component';
import { OverlayComponent } from './overlay/overlay/overlay.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [InterpolayComponent, OverlayComponent],
  imports: [
    FormsModule,
    OverlayModule,
  ],
  exports: [InterpolayComponent]
})
export class InterpolayModule { }
