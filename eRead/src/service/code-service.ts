/**
 * Created by Jinkai on 2017/5/14.
 */
import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CodeService {
  constructor(public http: Http) {

  }

  public runCode(code):string {
    var url = 'https://api.hackerearth.com/v3/code/run/';
    var headers = new Headers();
    headers.append('Content-type','application/x-www-form-urlencoded');
    var data =
      "client_secret=4d4aa957c0cf4098b753404d7e0b2a424d44683b&"+
      "async=0&"+
      "source=" + code + "&"+
      "lang=JAVA&"+
      "time_limit=5&"+
      "memory_limit=262144";
    this.http.post(url,data,{headers:headers}).subscribe(data =>{
      console.log(data);
      return data.toString;
    },error => {
      console.log("error!");
      console.log(error);
    });
    return "error";
  }
}
