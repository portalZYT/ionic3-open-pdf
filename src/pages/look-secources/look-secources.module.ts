import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {LookSecourcesPage} from './look-secources';
import {InAppBrowser} from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    LookSecourcesPage,
  ],
  imports: [
    IonicPageModule.forChild(LookSecourcesPage)
  ],
  providers: [
    InAppBrowser
  ]
})
export class LookSecourcesPageModule {
}
