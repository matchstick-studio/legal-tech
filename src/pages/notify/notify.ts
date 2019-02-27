import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the NotifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notify',
  templateUrl: 'notify.html',
})
export class NotifyPage {

  
   thedata;
   schedule;

  // notifications;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider:DataProvider) {
    // this.thedata = this.navParams.get('nData');
    // console.log(this.thedata);
    this.thedata = this.dataProvider.getAllNotes()
    .snapshotChanges()
    .map(
    changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    });

    this.schedule = this.dataProvider.getScheduleList()
    .snapshotChanges()
    .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });

  console.log(this.thedata);
  console.log(this.schedule);

    
    // this.thedata.getSentTime()
    // this.notifications = JSON.stringify(this.thedata);
            // console.log(this.x);
            // this.notifications = data;
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotifyPage');
  }


  // CONVERT MILLISECONDS TO DIGITAL CLOCK FORMAT
 convertMillisecondsToDigitalClock(ms) {
  var hours = Math.floor(ms / 3600000) // 1 Hour = 36000 Milliseconds
  var minutes = Math.floor((ms % 3600000) / 60000) // 1 Minutes = 60000 Milliseconds
  var seconds = Math.floor(((ms % 360000) % 60000) / 1000) // 1 Second = 1000 Milliseconds
      return {
      hours : hours,
      minutes : minutes,
      seconds : seconds,
      clock : hours + ":" + minutes + ":" + seconds
  };
}
}
