import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from '../etudiant.service';
import { Etudiant } from '../model/etudiant.model';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {

  newEtudiant = new Etudiant();
  message: string; 
  //router: any;

  constructor( private etudiantService: EtudiantService,private router:Router) { }

  ngOnInit(): void {
  }

  addEtudiantOne(etud){
    this.etudiantService.ajouterEtudiants(etud)
    .subscribe(etud => {
    console.log(etud);
    });
    this.router.navigate(['etudiants']);
    }

    
  addEtudiant(){
    // console.log(this.newProduit);
    this.etudiantService.ajouterEtudiant(this.newEtudiant);
    }
    

}
