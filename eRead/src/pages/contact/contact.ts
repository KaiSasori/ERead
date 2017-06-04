import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';
import {BookPage} from '../book/book';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,private storage: Storage) {

  }

  goToBookPage(page){
    this.storage.set('current_page',page);
    this.navCtrl.push(BookPage, {
      'name': "Python基础教程"
    });
  }
}
