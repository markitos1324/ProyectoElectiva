import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {title: 'General',
    url: '/general',
    icon: 'information-circle-outline'
    },
    {title: 'Pensum',
      url: '/pensum',
      icon:'podium'
    },
    {title: 'Ubicación',
      url: '/ubicacion',
      icon: 'map'
    },
    {title: 'Grupos de investigación',
      url: '/grupos',
      icon: 'flask'
    },
    {title: 'Personal escuela',
      url: '/personal',
      icon: 'contacts'
    },
    {title: 'Informacion de contacto',
      url: '/informacion',
      icon: 'chatboxes'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
