import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { AlertController, NavController} from '@ionic/angular';

import { Cliente } from '../servico/cliente.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  @Input() c: Cliente;

    email: string;
    senha: string;

  constructor(public navCtrl: NavController,
           public alertCtrl: AlertController,
           private route: Router) { }

 // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
   ngOnInit() {
  }
}
