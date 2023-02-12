import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api_exo2';

prenoms:any=[];
images: any = [];
resultat:any ;

constructor(){this.requete();}

  async requete(){
    let quote = [];

    for (let i=0; i<6; i++){
      let reponse = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
      let donnees = await reponse.json();
      quote.push(donnees[0]);
    }
    console.log(quote);


    //je veux recuperer les prenoms. 1er filtrage
    let prenom = quote.map((quote)=>quote.character);
    console.log(prenom);

    //pour eviter les doublons
    let newPrenom = [... new Set(prenom)];
    console.log(newPrenom);
    this.prenoms = newPrenom;


     //je veux recuperer les images. 1er filtrage
     let image = quote.map((quote)=>quote.image);
     console.log(image);
 
     //pour eviter les doublons de mes images
     let newImage = [... new Set(image)];
     console.log(newImage);
     this.images  = newImage;

    }
    async autreRequete(prenom:any){
     let reponse = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${prenom}`);
     let donnees = await reponse.json();
     console.log(donnees[0].quote);
     this.resultat = donnees[0].quote;
    }



}
