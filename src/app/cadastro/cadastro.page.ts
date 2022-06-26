import { Component, OnInit, NgModule, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Cliente, ClienteService } from '../servico/cliente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit{
  @Input() c: Cliente;
  atualizar = false;
  dados = {
    nome: '',
    cidade: '',
    email: '',
    cpf:'',
    nasc:'',
    senha:'',
    interesse:'',
    genero:''
  };

    constructor(
    private modalCtrl: ModalController,
    private service: ClienteService,
    private route: Router
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
    const cliente = form.value;
  if(this.atualizar){
    this.service.update(cliente, this.c.id).subscribe(response =>{
      this.modalCtrl.dismiss(response);
      this.route.navigateByUrl('/home');
    });
  }else{
    this.service.create(cliente).subscribe(response =>{
      this.modalCtrl.dismiss(response);
    });
  }
  }
}





