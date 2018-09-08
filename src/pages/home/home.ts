import { UserPreferencesPage } from './userPreferences/userPreferences';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];
																				// Injecting the controller into the constructor. Now it is available
  constructor(public nav: NavController, public modalCtrl: ModalController) {
    this.items = [
      {
        'title': 'Customize Card',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': 'Check Data',
        'icon': 'css3',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      },
      {
        'title': 'Edit Account',
        'icon': 'html5',
        'description': 'The latest version of the web\'s markup language.',
        'color': '#F46529'
      }
    ];
  }

  openModal(item: any) {
    if (item.title === 'Edit Account') {
        const editAccountModal = this.modalCtrl.create(UserPreferencesPage, { userId: 8675309 });
   			editAccountModal.present();
		}
    else if (item.title === 'Check Data') {
        const editAccountModal = this.modalCtrl.create(UserPreferencesPage, { userId: 8675309 });
   			editAccountModal.present();
		}
    else if (item.title === 'Customize Card') {
        const editAccountModal = this.modalCtrl.create(UserPreferencesPage, { userId: 8675309 });
   			editAccountModal.present();
		}

  }

}
