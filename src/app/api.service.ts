
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

  private url = 'http://127.0.0.1/helpme/login.php';

  constructor(
    public http: HttpClient
  ) { }

  getAll() {
    return this.http.get<[Usuario]>(this.url);
    }
}
