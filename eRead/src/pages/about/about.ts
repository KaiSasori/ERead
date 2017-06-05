import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {BookPage} from '../book/book';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  /*bookmark = [];
  c_number:number;*/
  constructor(public navCtrl: NavController,private storage: Storage) {
    /*this.storage.get('bookmark_num').then((val) => {
      if(val == null) {
        this.storage.set('bookmark_num',0);
        console.log("meow:bookmark");
      }else{
        console.log(val);
        for(var i = 0; i<val; i++){
          this.storage.get('bookmark_content'+ i).then((value) => {
            this.bookmark.push(value);
          });
        }
      }
    });*/
  }

  goToBookPage(page){
    this.storage.set('current_page',page);
    this.navCtrl.push(BookPage, {
      'name': "Python基础教程"
    });
  }
}
