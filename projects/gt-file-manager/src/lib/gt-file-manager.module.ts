import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {GtFileManagerComponent} from './gt-file-manager.component';
import {HttpClientModule} from '@angular/common/http';
import {GtFileResolveService} from './gt-file-resolve.service';



@NgModule({
  declarations: [GtFileManagerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    GtFileResolveService
  ],
  exports: [GtFileManagerComponent]
})
export class GtFileManagerModule { }
