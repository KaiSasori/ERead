import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { SlidesPage } from '../pages/slides/slides';
import { Storage } from '@ionic/storage';
import { TabsPage } from "../pages/tabs/tabs";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 /* rootPage = TabsPage;*/
  rootPage;

  constructor(platform: Platform,private storage: Storage) {
    this.storage.get('email').then((value) => {
      //value ? this.rootPage = TabsPage : this.rootPage = SlidesPage;
      value ? this.rootPage = TabsPage : this.rootPage = SlidesPage;
      console.log(value);
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
