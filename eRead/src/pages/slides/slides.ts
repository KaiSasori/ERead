import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from "../login/login";

@Component({
  templateUrl: 'slides.html'
})
export class SlidesPage {

  constructor(public navCtrl: NavController) {
  }

  slides = [
    {
      title: "MEOW ONE",
      description: "",
      image: "assets/img/slide-img-1.png",
    },
    {
      title: "MEOW TWO",
      description: "",
      image: "assets/img/slide-img-2.png",
    },
    {
      title: "MEOW THREE",
      description: "",
      image: "assets/img/slide-img-3.png",
    }
  ];

  slidesGo() {
    this.navCtrl.push(LoginPage);
  }
}
