import { HttpService } from './../services/http.service';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwingModule } from 'angular2-swing';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ThiccnPage } from '../pages/thiccn/thiccn';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UserPreferencesPage } from '../pages/home/userPreferences/userPreferences';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ThiccnPage,
    HomePage,
    TabsPage,
    UserPreferencesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SwingModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ThiccnPage,
    HomePage,
    TabsPage,
    UserPreferencesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
