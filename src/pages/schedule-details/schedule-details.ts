import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { FileOpener } from '@ionic-native/file-opener/ngx';


// const fileTransfer: FileTransferObject = this.transfer.create();
// declare var cordova: any;

/**
 * Generated class for the ScheduleDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule-details',
  templateUrl: 'schedule-details.html',
})


export class ScheduleDetailsPage {

  xx;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.xx = navParams.get('sch');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduleDetailsPage');
  }


  generateArray(obj){
    if(obj!=null){
      return Object.keys(obj).map((key)=>{ return obj[key]});
    }
    
    
  }

  openItem(item: any,page: string) {
    this.navCtrl.push(page.toString(), {
      speaker: item
    });


  }



  // download(url) {
    
  //   // fileTransfer.download(url, cordova.file.dataDirectory + 'file.pdf').then((entry) => {
  //   //   console.log('download complete: ' + entry.toURL());
  //   // }, (error) => {
  //   //   // handle error
  //   // });
  // }
  


  // openFile(path:any){
  //   this.fileOpener.open(path, 'application/pdf')
  // .then(() => console.log('File is opened'))
  // .catch(e => console.log('Error opening file', e));

  // }

  

}



