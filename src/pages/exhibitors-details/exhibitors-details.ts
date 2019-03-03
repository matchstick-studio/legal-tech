import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the ExhibitorsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exhibitors-details',
  templateUrl: 'exhibitors-details.html',
})
export class ExhibitorsDetailsPage {

 
rules;
apply;
guide;
  constructor(public navCtrl: NavController, public navParams: NavParams, private speakersList: DataProvider) {
  
  
 
    this.rules = this.speakersList.getRulesList()
    .snapshotChanges()
    .map(
    changes => {
      console.log(changes);
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()

        

      }))
    });

     
    this.guide = this.speakersList.getGuideList()
    .snapshotChanges()
    .map(
    changes => {
      console.log(changes);
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()

        

      }))
    });

     
    this.apply = this.speakersList.getApplyList()
    .snapshotChanges()
    .map(
    changes => {
      console.log(changes);
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
        

      }))
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExhibitorsDetailsPage');
  }

}
