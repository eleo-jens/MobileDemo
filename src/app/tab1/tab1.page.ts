import { Component } from '@angular/core';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AddListModalComponent } from '../add-list-modal/add-list-modal.component';
import { Article } from '../models/article.models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // liste globale est un tableau d'objets possédant un nom et une tableau d'articles
  listeGlobale : { nom:string, articles: Article[] }[] = [];
  nomDeArticle: string | null = null;
  articles: Article[] = [];

  constructor(
    // Injection de dépendance par le constructeur
    private alertController: AlertController,
    private actionSheetController: ActionSheetController,
    private storage: Storage,
    private modalController: ModalController,
  ) {}


  ajouterListe(){
    this.modalController.create({
      component: AddListModalComponent
    }).then(modal => modal.present());
  }

  ajouter(){
    if (!this.nomDeArticle){
      return; 
    }
    const nouvelArticle: Article = { 
      nom: this.nomDeArticle, 
      estCoche: false
    }
    this.articles.push(nouvelArticle);
    this.save();
    // this.articles = [...this.articles, nouvelArticle]; FACON REACT
    // créer une copie de la liste
    this.nomDeArticle = ""; 
  }

  confirmer(){
    this.alertController.create({
      message: "Voulez-vous vider la liste ?",
      buttons: [
        { text: 'Non' }, 
        { text: 'Oui', handler: () => this.vider() }]
    }).then(alert => alert.present());
  }

  afficherAction(article: Article){
    this.actionSheetController.create({
      buttons: [
        { 
          text: "Supprimer",  
          icon : "trash", 
          handler: () => this.supprimer(article)
        },
        { 
          text: (article.estCoche) ? "Décocher" : "Valider", 
          icon: (article.estCoche) ? "close" : "checkmark", 
          handler: () => this.valider(article) 
        }
      ]
    }).then(actionSheet => actionSheet.present());
  }

  // pour faire en sorte de ne pas pouvoir s'en servir directement dans la vue
  private vider(){
    if(!this.articles.length){
      return;
    }
    this.articles = [];
    this.save();
  }

  private supprimer(article: Article){
    const index = this.articles.indexOf(article);
    console.log(index);
    if (index > -1) { 
      this.articles.splice(index, 1);
    }
    this.save();
    // autre façon qui prend plus de temps (cela se fait en REACT) 
    // equivalent du .where en c#
    // prendre tous les articles qui sont différents de l'article selectionné ex: "Poivre" (référence mémoire) 
    // on crée un nouveau tableau
    // this.articles = this.articles.filter(a => a !== article);
  }

  private valider(article: Article){
    // if (article.estCoche == false)  article.estCoche = true;
    // else  article.estCoche = false;
    article.estCoche = !article.estCoche;
    this.save();
  }

  // Cycle de vie de la vue Ionic se declenche quand je navigue de page en page
  // ces méthodes doivent porter exactement le nom des cycles de vie
  // on charge la fonction load (on charge la liste issue du storage) quand la page est completement chargée
  ionViewDidEnter(){
    // se declenche quand j'arrive sur la page
    this.load();
  }

  // quand on quitte la page, je save la liste dans le storage
  ionViewWillLeave(){
    // se declenche à chaque fois que je change de page
    // attention, ne se déclenche pas si je ferme l'application
    this.save();
  }

  private save(){
    this.storage.set('LISTE_ARTICLES', this.articles); 
  }

  private load(){
    //coalesce: si data est vide/null alors on prends la valeur de d'un tableau vide []
    this.storage.get('LISTE_ARTICLES')
      .then(data => this.articles = data ?? []);
  }
}
