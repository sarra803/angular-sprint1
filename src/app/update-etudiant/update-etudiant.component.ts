import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from '../etudiant.service';
import { Etudiant } from '../model/etudiant.model';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styles: [
  ]
})
export class UpdateEtudiantComponent implements OnInit {
  currentEtudiant = new Etudiant();
  constructor(private activatedRoute: ActivatedRoute,
             private router :Router,
            private etudiantService :EtudiantService){}
     
  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
this.currentEtudiant = this.etudiantService.consulterEtudiant(this.activatedRoute.snapshot.params.id);
console.log(this.currentEtudiant);

  }
  updateEtudiant()
  { //console.log(this.currentProduit);
  this.etudiantService.updateEtudiant(this.currentEtudiant);
  this.router.navigate(['etudiants']);

  }
  

}
