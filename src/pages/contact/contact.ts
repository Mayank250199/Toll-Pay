import { Component } from '@angular/core';
import { NavController,Nav} from 'ionic-angular';

import { CardPage } from '../card/card';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  tolls :any;
  tol:any;
  sum:any=0;
  constructor(public navCtrl: NavController,public nav:Nav) {
   this.tolls = localStorage.getItem('tolls');
   this.tol = JSON.parse(this.tolls);
   this.tol.map(res=>{
     this.sum+=res.oneWay;
   })
   console.log(this.sum);
  }

  payment(){
    this.nav.setRoot(CardPage); 
  }

}
