import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {GtFileManagerComponent} from "./gt-file-manager.component";



@NgModule({
  declarations: [GtFileManagerComponent],
  imports: [
    CommonModule
  ],
  exports: [GtFileManagerComponent]
})
export class GtFileManagerModule { }
