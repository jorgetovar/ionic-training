import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  openDetails() {
    this.navCtrl.push('FilmDetailsPage');
  }

  goToPlanets() {
    this.navCtrl.parent.select(2);
  }
}
