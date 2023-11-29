import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { LoaderPage } from '../loader/loader.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private loaderPage: LoaderPage, private navCtrl: NavController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.loaderPage.presentLoader();

    setTimeout(() => {
      this.navCtrl.navigateRoot('/login')
    }, 2000);
  }

  signIn() {
    this.navCtrl.navigateRoot('calculator')
  }

}
