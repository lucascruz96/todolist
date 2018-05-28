import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AnotacoesService } from '../../providers/anotacoes-service';

@Component({
  selector: 'page-anotacoes',
  templateUrl: 'anotacoes.html',
})
export class AnotacoesPage {

  anotacoes: any[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public anotacoesService: AnotacoesService ) {
              this.anotacoes = anotacoesService.getAnotacoes();
  }

  ionViewDidEnter(){
    this.presentLoading();
  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Carregando anotações...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }
}
