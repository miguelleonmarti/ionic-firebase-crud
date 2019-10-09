import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

// capacitor
import { Plugins } from '@capacitor/core';
const { SplashScreen, StatusBar } = Plugins;

// firebase
import * as firebase from 'firebase/app';

// firebase config
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
  ) {
    this.initializeApp();
    firebase.initializeApp(environment.firebaseConfig);
  }

  initializeApp() {
    this.platform.ready().then(() => {
    });

    SplashScreen.hide().catch(error => {
      console.error(error);
    });

    StatusBar.hide().catch(error => {
      console.error(error);
    });
  }
}
