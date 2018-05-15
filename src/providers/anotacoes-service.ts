import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AnotacoesService {

  anotacoes = [
    { codigo: 1, nome: 'Algoritmos', conteudo: 'atp é bom d+'},
    { codigo: 2, nome: 'Pós-graduação', conteudo: 'pós é bom d+' },
    { codigo: 3, nome: 'EAD', conteudo: 'ead é bom d+' }
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
      conteudo: v
    });
  }


}
