import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  nome: any;
  cpf: any;
  nasc: any;
  interesse: any;
  genero: any;
  email: any;
  senha: any;

  constructor() { }

  addUsuario(){
    console.log(this.nome, this.cpf, this.nasc, this.interesse, this.genero, this.email, this.senha);
  }
  ngOnInit() {
  }

}
