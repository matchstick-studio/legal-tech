import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the WifiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wifi',
  templateUrl: 'wifi.html',
})
export class WifiPage {

  
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WifiPage');
  }

  a(){
    // this.navCtrl.setRoot(TabsPage, {tabIndex: '4'})
    // this.navCtrl.parent.select(3);
    // this.app.getRootNavById().setRoot(TabsPage, {tabIndex: 2});
    this.navCtrl.push(TabsPage, { selectedTab: 3 ,aa: "aa"});
  }

  

}
