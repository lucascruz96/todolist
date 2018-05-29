import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AnotacoesService } from '../../providers/anotacoes-service';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-anotacoes',
  templateUrl: 'anotacoes.html',
})
export class AnotacoesPage {

  anotacoes: any[];
  
  private image: string;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public anotacoesService: AnotacoesService,
              public alertCtrl: AlertController,
              private camera: Camera) {
              this.anotacoes = anotacoesService.getAnotacoes();
  }

  onTakePicture(codigo) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: true,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
      this.anotacoes[codigo-1].imagem = this.image;
      }, (err) => {
        this.displayErrorAlert(err);
      });
  }

  displayErrorAlert(err){
    console.log(err);
    let alert = this.alertCtrl.create({
       title: 'Error',
       subTitle: 'Error while trying to capture picture',
       buttons: ['OK']
     });
     alert.present();
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
