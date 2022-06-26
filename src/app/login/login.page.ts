import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { AlertController, NavController} from '@ionic/angular';

import { Cliente, ClienteService } from '../servico/cliente.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  @Input() c: Cliente;
  dados = {
    email: '',
    senha:'',
  };

  constructor(public navCtrl: NavController,
           public alertCtrl: AlertController,
           private service: ClienteService,
           private route: Router) { }

 // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
   ngOnInit() {
  }
  logar(){
    if(this.c.email && this.c.senha === this.dados.email && this.dados.senha){
      this.route.navigateByUrl('/home');
    }else{
      this.route.navigateByUrl('/home');
    }
  }
  logando(form: NgForm){
    this.route.navigateByUrl('/home');
}
}
