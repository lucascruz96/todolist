import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AnotacoesService {

  anotacoes = [
    { codigo: 1, nome: 'Atividade TESI', conteudo: 'Implementar a utilização de uma funcionalidade nativa.', imagem: ''},
    { codigo: 2, nome: 'Integrantes do grupo', conteudo: 'Gabriel Apolinário, Lucas Madeira, Rander Leal e Samara Sathler', imagem: '' },
    { codigo: 3, nome: 'Personalizar', conteudo: 'Personalizar a aplicação', imagem: '' }
  ];

  ultimoCodigo = 3;

  constructor(public http: Http) {
    console.log('Hello AnotacoesServiceProvider Provider');
  }

  getAnotacoes() {
    return this.anotacoes;
  }

  editAnotacoes(c:number, n:string,v:string) {
    for(let i=0; i<this.anotacoes.length; i++) {
      if(this.anotacoes[i].codigo == c) {
        this.anotacoes[i].nome = n;
        this.anotacoes[i].conteudo = v;
        break;
      }
    }
  }

  deleteAnotacoes(c:number) {
    for(let i=0; i<this.anotacoes.length; i++) {
      if(this.anotacoes[i].codigo == c) {
        this.anotacoes.splice(i,1);
        break;
      }
    }
  }

  addAnotacoes(n:string, v:string) {
    this.ultimoCodigo++;
    this.anotacoes.push({
      codigo: this.ultimoCodigo,
      nome: n,
      conteudo: v,
      imagem: ''
    });
  }


}
