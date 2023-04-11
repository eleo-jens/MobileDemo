import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { OFFResult } from '../models/product.model';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']

})
export class Tab2Page {

  result!: OFFResult;
  scanActive: boolean = false;

  constructor(
    private readonly http: HttpClient,
    private readonly loadingController : LoadingController
  ) {}

  async scan(){
    if(this.scanActive){
      await BarcodeScanner.stopScan();
      this.scanActive = false; 
      return;
    }

    // ouvrir le scanner de codbarre, demande la permission: c'est une promesse
    await BarcodeScanner.prepare();
    await BarcodeScanner.checkPermission({ force: true });
    this.scanActive = true;

    document.querySelector('body')?.classList.add('scanner-active');
    await BarcodeScanner.hideBackground();
    let scanResult = await BarcodeScanner.startScan();
    let codebar = scanResult.content; 
    this.scanActive = false; 
    
    document.querySelector('body')?.classList.remove('scanner-active');

    const loader = await this.loadingController.create( { 
      message: 'Loading, plase wait.',
      spinner: 'circles'
    });
    loader.present();
    
    // appel du client http en méthode get
    this.http.get<OFFResult>('https://world.openfoodfacts.org/api/v0/product/' + codebar + '.json').subscribe({
        // methode exécutée en cas de succès, à chaque fois que l'observable réagit, la méthode next réagit, comme un click
        next: (data) => { this.result = data; loader.dismiss() },
        // s'execute à chaque fois que mon observable crée une erreur/plante
        // on fera plus une gestion d'erreur en post que en get
        error: () => {},
        // appelé qu'une seule fois quand mon observable a fini d'émettre
        complete: () => {}
    });

    // raccourci
    // this.http.get<any>('https://world.openfoodfacts.org/api/v0/product/' + codebar + '.json')
    //   .subscribe( (data) => { console.log() });
  }

}
