import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController,AlertController, LoadingController, Loading  } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-book',
  templateUrl: 'book.html'
})
export class BookPage {

  loading: Loading;
  bookname:string;

  content: string[];
  current_page:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,
              public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController,
              private loadingCtrl: LoadingController,private storage: Storage) {
    this.bookname = navParams.get('name');

    this.storage.get('current_page').then((val) => {
      console.log(val);
      this.current_page = val;
      this.storage.get('book_content' + val).then((value) => {
        console.log(value);
        this.content = value;
      });
    });
  }

  goToNextPage(){
    this.storage.get('current_page').then((val) => {
      console.log(val);
      this.current_page = val;
      this.storage.get('book_content' + (val + 1)).then((value) => {
        console.log(value);
        if (value === null){
          this.storage.set('current_page',0);
          this.current_page = 0;
          this.storage.get('book_content0').then((valuex) => {
            this.content = valuex;
          });
        }else{
          this.content = value;
          this.storage.set('current_page',(val + 1));
          this.current_page = val + 1;
        }
      });
    });
  }

  presentActionSheet(index) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '选择',
      buttons: [
        {
          text: '书签',
          handler: () => {
            console.log('书签');
            this.bookmark(this.content[index]);
          }
        },{
          text: '笔记',
          handler: () => {
            console.log('笔记');
          }
        },{
          text: '提问',
          handler: () => {
            console.log('提问');
            this.askQuestion(this.content[index]);
          }
        },{
          text: '运行代码',
          handler: () => {
            console.log(this.content[index]);
            this.compileCode(this.content[index]);
          }
        },{
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('取消');
          }
        }
      ]
    });
    actionSheet.present();
  }

  bookmark(code) {
    /*var b = [];
    b.push("Python基础教程");
    b.push("2017-06-04");
    b.push(code);
    b.push(this.current_page);
    this.storage.get('bookmark_num').then((val) => {
      console.log("meow:" + val);
      this.storage.set('bookmark_content'+ val,b);
      this.storage.set('bookmark_num',val + 1);
    });*/
  }

  askQuestion(code){
    let prompt = this.alertCtrl.create({
      title: '问题',
      message: "填写问题",
      inputs: [
        {
          name: 'question',
          placeholder: 'Question'
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
            c.push(data.question);
            c.push("2017-06-04");
            c.push("原文：" + code);
            this.storage.get('comment_num').then((val) => {
              this.storage.set('comment_content'+ val,c);
              this.storage.set('comment_num',val + 1);
            });
          }
        }
      ]
    });
    prompt.present();
  }

  compileCode(code) {
    this.showLoading();
    var url = 'https://api.hackerearth.com/v3/code/run/';
    var headers = new Headers();
    headers.append('Content-type','application/x-www-form-urlencoded');
    var data =
      "client_secret=4d4aa957c0cf4098b753404d7e0b2a424d44683b&"+
      "async=0&"+
      "source=print('hello python')&"+
      "lang=PYTHON&"+
      "time_limit=5&"+
      "memory_limit=262144";
    this.http.post(url,data,{headers:headers}).subscribe(data =>{
      console.log(JSON.stringify(data.json()['run_status']));
      this.loading.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Result',
        subTitle: JSON.stringify(data.json()['run_status']),
        buttons: ['OK']
      });
      alert.present();
    },error => {
      this.loading.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: error,
        buttons: ['OK']
      });
      alert.present();
    });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
}
