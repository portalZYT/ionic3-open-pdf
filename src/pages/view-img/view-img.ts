import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-view-img',
  templateUrl: 'view-img.html',
})
export class ViewImgPage {
  img: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.img = this.navParams.get('imgUrl');
  }

  ionViewWillEnter() {
  }

}
