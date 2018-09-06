import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-user-preferences',
  templateUrl: 'userPreferences.html'
})
export class UserPreferencesPage {

  works = 'works';
  constructor(public navCtrl: NavController) {

  }

}
