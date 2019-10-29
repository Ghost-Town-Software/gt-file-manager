import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GtFileManagerModule} from '../../../gt-file-manager/src/lib/gt-file-manager.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GtFileManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
