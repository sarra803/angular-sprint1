import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../etudiant.service';

import { Etudiant } from '../model/etudiant.model';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  etudiants : Etudiant[]; 

  constructor( private etudiantService: EtudiantService) {
    this.etudiants=etudiantService.listeEtudiants() ;
  
  }

  ngOnInit(): void {
    this.etudiantService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.etudiants = prods;
      //console.log(prods['prenom']);
      });
      
  
    }
    
  
   supprimerEtudiant(p: Etudiant)
   {

  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.etudiantService.supprimerEtudiant(p);
   }

}
