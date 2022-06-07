import { UsuarioService } from './../servico/usuario.service';
import {  Usuario } from './../api.service';
import { Component, OnInit, NgModule, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit{
  @Input() c: Usuario;
  atualizar = false;
  dados = {
  nome: '',
  email: ''
};


constructor(
  private modalCtrl: ModalController,
  private service: UsuarioService
  ) { }

  ngOnInit() {
    if (this.c){
     this.atualizar = true;
      this.dados = this.c;
    }
  }
  fecharModal(){
  this.modalCtrl.dismiss();
}

enviando(form: NgForm){
  const usuario = form.value;
if(this.atualizar){
  this.service.update(usuario, this.c.id_usuario).subscribe(response =>{
    this.modalCtrl.dismiss(response);
  });
}else{
  this.service.create(usuario).subscribe(response =>{
    this.modalCtrl.dismiss(response);
  });
}
}
}






