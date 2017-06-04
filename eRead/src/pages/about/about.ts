import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {BookPage} from '../book/book';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,private storage: Storage) {

  }

  goToBookPage(page){
    this.storage.set('current_page',page);
    this.navCtrl.push(BookPage, {
      'name': "Python基础教程"
    });
  }
}
