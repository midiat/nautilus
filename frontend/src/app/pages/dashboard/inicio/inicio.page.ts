import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  constructor(
    private platform: Platform,
    private alertController: AlertController
  ) { }

  // Función que registra cada que el usuario presiona el botón de retroceso:
  backButton_eventRegister() {    
    this.platform.backButton.subscribe(async () => {
      console.log('Boton');

      const alert = await this.alertController.create({
        backdropDismiss: false,
        header: '¡Hola!',
        buttons: ['Adelante']
      });

      await alert.present();

    });
  };

}
