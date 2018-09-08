import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-user-preferences',
  templateUrl: 'userPreferences.html'
})
export class UserPreferencesPage {

  rangeSliderValue = 0;
  works = 'works';
  constructor(public navCtrl: NavController) {
    this.rangeSliderValue = 30;
  }
  
  // We defined this event handler function for Angular to call every time an event is released.
  // Apparently ionChange is a common event for the value of Ionic Components changing.
  onRangeValueChange() {
		console.log(this.rangeSliderValue)
  }

}
