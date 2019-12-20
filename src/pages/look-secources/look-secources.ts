import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {AccountService} from "../../services/user.service";
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-look-secources',
  templateUrl: 'look-secources.html',
})
export class LookSecourcesPage {
  imgUrlList: any;
  //浏览器配置
  options: InAppBrowserOptions = {
    location: 'no',//Or 'no'
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only
    closebuttoncaption: '关闭', //iOS only
    disallowoverscroll: 'yes', //iOS only
    toolbar: 'yes', //iOS only
    enableViewportScale: 'yes', //iOS only
    allowInlineMediaPlayback: 'no',//iOS only
    presentationstyle: 'fullscreen',//iOS only
    fullscreen: 'yes',//Windows only
  };

  constructor(public navCtrl: NavController,
              private accountService: AccountService,
              private iab: InAppBrowser,
              private platform: Platform) {
  }

  viewImg(img) {
    if (img.type === 'img') {
      this.navCtrl.push('ViewImgPage', {imgUrl: img})
    } else if (img.type === 'pdf') {
      if (this.platform.is('ios')) {
        this.iab.create(img.url, '_blank', this.options);
      } else {
        // @ts-ignore
        window.plugins.OpenPDF.openWithUrl(img.url, function (data) {
        }, function (data) {
        });
      }
    } else {
      this.iab.create(img.url, '_blank', this.options);
    }

  }

  getDataList() {
    this.accountService.getDataList().then((data) => {
      this.imgUrlList = data;
    })
  }

  ionViewWillEnter() {
    this.getDataList();
  }
}
