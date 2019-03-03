import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Nav, Platform, ToastController, AlertController } from 'ionic-angular';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthProvider } from '../providers/auth/auth';
import { FcmProvider } from '../providers/fcm/fcm';
import { tap } from 'rxjs/operators';




@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Guide</ion-title>
        <ion-buttons end>
        <button style="color:white" menuClose ion-button >
                <ion-icon  name="close"></ion-icon>
              </button>
        </ion-buttons>
       
        
             
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list no-lines style="padding-top:20px; ">
   
        <ion-item style="background-color: rgba(0, 0, 0, 0);" *ngFor="let p of pages" menuClose (click)="openPage(p)">
          <ion-icon [name]="p.icon" item-left></ion-icon>
          {{ p.title }}
        </ion-item>

       

        
      </ion-list>
      <br><br>
      <ion-avatar style="width: 40%;margin-left:30%;margin-bottom:1%;" id="jjj">
          <img [src]="'assets/img/host.png'">
  
      </ion-avatar>
      <br><br>
      
      <ion-avatar style="width: 40%;margin-left:30%;bottom:30px;position:absolute;" id="jjj" onclick="window.open('https://matchstick.ug')">
      
          <img [src]="'assets/img/ms.png'">
  
      </ion-avatar>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`

})
export class MyApp {
  rootPage: any;

  pages: Array<{ title: string, component: any, icon: string }>;

  @ViewChild(Nav) nav: Nav;


  constructor(public platform: Platform, private statusBar: StatusBar,public fcm: FcmProvider,public toastCtrl: ToastController, private splashScreen: SplashScreen, private auth: AuthProvider,public alertCtrl:AlertController) {
  //   platform.ready().then(() => {
      

  //     // Get a FCM token
  //     // fcm.firebaseNative.getToken().then(token => {
  //     //   console.log(token);
  //     // })



  //     // fcm.firebaseNative.subscribe('all');
  //     // // Listen to incoming messages
  //     // fcm.listenToNotifications().pipe(
  //     //   tap(msg => {

  //     //     // show a toast
  //     //     let messageText: string;
  //     //     if (this.platform.is('android')) {
  //     //       messageText = msg.body;
  //     //     }

  //     //     if (this.platform.is('ios')) {
  //     //       messageText = msg.aps.alert;
  //     //     }
  //     //     const toast = toastCtrl.create({
  //     //       message: messageText,
  //     //       duration: 3000
  //     //     });
  //     //     toast.present();
  //     //   })
  //     // )
  //     //   .subscribe()



  // //     fcm.firebaseNative.onNotificationOpen().subscribe(data => {
  // //       console.log("NOTIF DATA: " + JSON.stringify(data));
  // //     //   if (data.wasTapped) {
  // //     //     console.log(data);
  // //     //     this.nav.push("TabsPage", { aa: "aa", nData: data });

  // //     //   } else {

  // //     //     //  if(data.type == 'messages') {
  // //     //     //   alert('HEY');
  // //     //     //   this.nav.setRoot(TabsPage);
  // //     //     // }
  // //     //     // this is where to make increment of badge value

  // //     //     let messageText: string;
  // //     //     if (this.platform.is('android')) {
  // //     //       messageText = data.body;
  // //     //     }

  // //     //     if (this.platform.is('ios')) {
  // //     //       messageText = data.aps.alert;
  // //     //     }
  // //     //     const toast = toastCtrl.create({
  // //     //       message: messageText,
  // //     //       duration: 3000
  // //     //     });
  // //     //     toast.present();
  // //     //   }
  // //     // })
  // //     if(data.wasTapped){
  // //       // this.nav.push(TabsPage, { aa: "aa", nData: data })
  // //           console.log(data);
  // //       this.nav.push(TabsPage, { selectedTab: 3,aa: "aa", nData: data });
  // //       console.info('Received in bg')
  // //     }else{
  // //       if(data.type == 'messages') {
  // //         this.nav.push(TabsPage, { selectedTab: 3,aa: "aa", nData: data });
  // //       }
  // //       let messageText: string;
  // //       if (this.platform.is('android')) {
  // //               messageText = data.body;
  // //         }
          
  // //         if (this.platform.is('ios')) {
  // //           messageText = data.aps.alert;
  // //         }



  // //         // increase badge count here


  // //       let alert = this.alertCtrl.create({
  // //         title: "New Notification",
  // //         message: messageText,
  // //         buttons: [
  // //           {
  // //             text: 'Ignore',
  // //             role: 'cancel'
  // //           },
  // //           {
  // //             text: 'View',
  // //             handler: () => {
  // //               // this.nav.push(TabsPage, { aa: "aa", nData: data })
  // //               this.nav.push(TabsPage, { selectedTab: 3 ,aa: "bb", nData: data});
  // //             }
  // //           }
  // //         ]
  // //       });

  // //       alert.present();


        





  // //       console.info('Received in fg')
  // //     }
  // // });


  //   });



 
    this.initializeApp();

    this.pages = [
      { title: 'Speakers', component: 'SpeakersPage', icon: "people" },
      { title: 'Sponsors', component: 'SponsorsPage', icon: "ionic" },
 
      { title: 'Delegates', component: 'AttendeesPage', icon: 'ios-people' },
      { title: 'WiFi Information', component: 'WifiPage', icon: 'wifi' },

      { title: 'Pitch Competition', component: 'ExhibitorsDetailsPage', icon: 'trophy' },

    ]

  }

  initializeApp() {
    this.platform.ready().then(() => {


      this.statusBar.styleDefault();
      // this.splashScreen.show();
      setTimeout(() => {
        this.splashScreen.hide();
      }, 300);
    });

    this.auth.afAuth.authState
      .subscribe(
        user => {
          if (user && user.emailVerified) {
            this.rootPage = TabsPage;
          } else if (user && !user.emailVerified) {
            alert('Please verify your email address to gain access');
            this.rootPage = LoginPage;

          } else {
            this.rootPage = LoginPage;
          }
        },
        () => {
          this.rootPage = LoginPage;
        }
      );

       // Get a FCM token
       this.fcm.firebaseNative.getToken().then(token=>{
        console.log(token);
    })
    


    this.fcm.firebaseNative.subscribe('all');
      // Listen to incoming messages
      this.fcm.listenToNotifications().pipe(
        tap(msg => {
          // show a toast
          let messageText: string;
          if (this.platform.is('android')) {
            messageText = msg.body;
          }

          if (this.platform.is('ios')) {
            messageText = msg.aps.alert;
          }
          const toast = this.toastCtrl.create({
            message: messageText,
            duration: 3000
          });
          toast.present();
        })
      )
        .subscribe()


 

    this.fcm.firebaseNative.onTokenRefresh().subscribe(token=>{
      console.log(token);
    });
  }





  openPage(a) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(a.component);

    this.nav.push(a.component.toString());

  }


}
