import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public Alerta: AlertController) {}

  async alerta(){

    const alert = await this.Alerta.create({

      header: 'Alerta',
      message: 'Esta es una Alerta de prueba de mi aplicacion',
      buttons: ['OK']
    });
          await alert.present();
          let result = await alert.onDidDismiss();
          console.log(result);

  }

}
