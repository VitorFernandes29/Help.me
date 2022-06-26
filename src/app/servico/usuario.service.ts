import * as usuarioService from './usuario.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




export interface Usuario{
  // eslint-disable-next-line @typescript-eslint/naming-convention
  id_usuario: string;
  nome: string;
  cpf: string;
  nasc: string;
  interesse: string;
  genero: string;
  email: string;
  senha: string;
  cnpj: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = 'http://127.0.0.1/helpme/usuario.php';
 //000web funcionando parcialmente
  //private url = 'https://pam21.000webhostapp.com/cliente';
  //infinity Bloqueado
  //private url = 'http://pam2.epizy.com/cliente';

  //AwardSpacepleno!
  //private url = 'http://pam2.atwebpages.com/cliente';


  constructor(private http: HttpClient) { }

  getAll(){

    return this.http.get<[usuarioService.Usuario]>(this.url);

  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  remove(id_usuario: any){
    return this.http.delete(this.url + '/' + id_usuario);
  }
  create(usuario: usuarioService.Usuario){
    return this.http.post(this.url, usuario);
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  update(usuario: usuarioService.Usuario, id_usuario: any){
    return this.http.put(this.url + '/' + id_usuario, usuario);
  }
  login(usuario: usuarioService.Usuario){
    return this.http.request(this.url, usuario.email && usuario.senha);
  }
}
