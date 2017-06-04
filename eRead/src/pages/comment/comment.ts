/**
 * Created by Jinkai on 2017/5/11.
 */
import {Component} from '@angular/core';
import {AlertController} from 'ionic-angular';
import {Http} from "@angular/http";
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html'
})
export class CommentPage {
  comment = [];
  answers = [];
  c_number:number;

  constructor(public alertCtrl:AlertController, public http:Http, private storage:Storage) {
    this.storage.get('comment_num').then((val) => {

      for(var i = 0; i<val; i++){
        this.storage.get('comment_content'+ i).then((value) => {
          this.comment.push(value);
        });
        this.storage.get('answer_content' + i).then((value) => {
          this.answers.push(value);
        });
      }
      /*this.storage.get('comment_content0').then((value) => {
        this.comment[0] = value;
        console.log(this.comment);
      });
      this.storage.get('answer_content0').then((value) => {
        this.answers[0] = value;
      });
      this.storage.get('comment_content1').then((value) => {
        this.comment[1] = value;
        console.log(this.comment);
      });
      this.storage.get('answer_content1').then((value) => {
        this.answers[1] = value;
      });*/
    });
    /* this.http.get('http://localhost:8080/book/allByBook?bookname=Python入门').map(res => res.json()).subscribe(data => {
     console.log(data);
     });*/
  }

  addAnswers(index) {
    let prompt = this.alertCtrl.create({
      title: '答案',
      message: "填写答案",
      inputs: [
        {
          name: 'answer',
          placeholder: 'Answer'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.answers[index].push("Kaiv BB：" + data.answer);
            console.log(data);
          }
        }
      ]
    });
    prompt.present();
  }

  addComments() {
    let prompt = this.alertCtrl.create({
      title: '评论',
      message: "填写评论",
      inputs: [
        {
          name: 'comment',
          placeholder: 'Comment'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            var c = [];
            c.push(data.comment);
            c.push("2017-06-04");
            c.push("");
            this.comment.push(c);
          }
        }
      ]
    });
    prompt.present();
  }
}
