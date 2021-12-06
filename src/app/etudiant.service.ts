import { Injectable } from '@angular/core';
import { Etudiant } from './model/etudiant.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  apiURL: string = 'http://localhost:8090/api/all';
  apiURLAdd:string = 'http://localhost:8090/api';

  etudiants : Etudiant[];
  etudiant:Etudiant;

 constructor(private http:HttpClient) {
 this.etudiants =[
      {idEtudiant : 1, nomEtudiant : "sassi", prenomEtudiant : "sarra",NumCin :2},
     // {idEtudiant : 2, nomEtudiant : " sassi", prenomEtudiant : "saif", NumCin:08954772},
      //{idEtudiant : 3, nomEtudiant :"sassi", prenomEtudiant : "salim", NumCin :08752684}
    ];
}
ajouterEtudiants( prod: Etudiant):Observable<Etudiant>{
  const httpOptions = {
    headers: new HttpHeaders( {'Content-Type': 'application/json'} )
    };
  return this.http.post<Etudiant>(this.apiURLAdd, prod, httpOptions);
  }


listeEtudiants():Etudiant[] {
  return this.etudiants;
}

ajouterEtudiant( etu: Etudiant){
this.etudiants.push(etu);
}
supprimerEtudiant( etu: Etudiant){
  
  const index = this.etudiants.indexOf(etu, 0);
  if (index > -1) {
  this.etudiants.splice(index, 1);
  }
 
  }

  listeProduit(): Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.apiURL);
    }

    
  consulterEtudiant(id:number): Etudiant{
    this.etudiant = this.etudiants.find(p => p.idEtudiant == id);
    return this.etudiant;
    }
    updateEtudiant(p:Etudiant)
{
// console.log(p);
  this.supprimerEtudiant(p);
  this.ajouterEtudiant(p);
  this.trierEtudiants();
}
trierEtudiants(){
  this.etudiants = this.etudiants.sort((n1,n2) => {
  if (n1.idEtudiant > n2.idEtudiant) {
  return 1;
  }
  if (n1.idEtudiant < n2.idEtudiant) {
  return -1;
  }
  return 0;
  });
  }
}

