import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import {BookPage} from '../book/book';
import {CommentPage} from "../comment/comment";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  book_titles:string[];
  book_author:string[];
  book_info:string[];
  like_number:number[];
  book_content = [[]];
  comment_content =[[]];
  answer_content=[[]];

  //book_list:any;
  constructor(public navCtrl:NavController,private storage: Storage) {
    this.http.get('http://localhost:8080/book/all').map(res => res.json()).subscribe(data => {
      this.book_titles = data[0];
      this.book_author = data[1];
      this.book_info = data[2];
      this.like_number = data[3];
    });

    this.http.get('http://localhost:8080/content/all').map(res => res.json()).subscribe(data => {
      this.book_content = data;
    });
    this.storage.set('book_content0',this.book_content[0]);
    this.storage.set('book_content1',this.book_content[1]);
    this.storage.set('book_content2',this.book_content[2]);
    this.storage.set('book_content3',this.book_content[3]);
    this.storage.set('book_content4',this.book_content[4]);

    this.http.get('http://localhost:8080/comments/all').map(res => res.json()).subscribe(data => {
      this.comment_content = data;
    });
    this.http.get('http://localhost:8080/answer/all').map(res => res.json()).subscribe(data => {
      this.answer_content = data;
    });
    this.storage.set('comment_num',this.comment_content.length);
    this.storage.set('comment_content0', this.comment_content[0]);
    this.storage.set('comment_content1', this.comment_content[1]);
    this.storage.set('answer_content0', this.answer_content[0]);
    this.storage.set('answer_content1', this.answer_content[1]);

    this.storage.get('current_page').then((value) => {
      if (value === null){
        this.storage.set('current_page',0);
      }
    });
  }


  readBook() {
    this.navCtrl.push(BookPage, {
      'name': "Python基础教程"
    });
  }

  addLikeNumber(event, number) {
    this.storage.get('book' + number).then((value) => {
      console.log(value);
      if (value === null){
        this.like_number[number]++;
        this.storage.set('book' + number, 'true');
      }else{
        this.like_number[number]--;
        this.storage.remove('book' + number);
      }
    });
    event.stopPropagation();
  }

  goToComments(event) {
    this.navCtrl.push(CommentPage);
    event.stopPropagation();
  }
}
