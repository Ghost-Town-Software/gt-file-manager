import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {GtFileManagerComponent} from './gt-file-manager.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [GtFileManagerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [GtFileManagerComponent]
})
export class GtFileManagerModule { }
