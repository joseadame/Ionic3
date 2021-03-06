import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionViewWillEnter(){
    console.log('hemos entrado');
  }

  navigateToSecondPage(): void {
    this.navCtrl.push('SecondPage', {"message" : "hello from home page"});
  }

  navigateToAboutPage(): void {
    this.navCtrl.push('AboutPage');
  }
}
