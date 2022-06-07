import { Component, OnInit } from '@angular/core';
import { AlertController, AlertOptions, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string;
  senha: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) { }

  logar(){
    // eslint-disable-next-line eqeqeq
    if(this.email  == undefined || this.senha == undefined){
      const alert = this.alertCtrl.create({

        message: 'Preencha todos os campos!',
        buttons: ['OK']
      });

    }
  }

}
