import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnotacoesService } from '../../providers/anotacoes-service';

@Component({
  selector: 'page-anotacoes',
  templateUrl: 'anotacoes.html',
})
export class AnotacoesPage {

  anotacoes: any[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public anotacoesService: AnotacoesService ) {
              this.anotacoes = anotacoesService.getAnotacoes();
  }
}
