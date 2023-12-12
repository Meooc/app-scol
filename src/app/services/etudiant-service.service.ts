import { Injectable } from '@angular/core';
import { IEtudiant } from '../models/ietudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantServiceService {
  private etudiants: IEtudiant[] = [];

  constructor() { 
    this.etudiants.push(
      { _nom: 'Nom1',
        _prenoms: 'Côme',
        _rue: 'Rue1',
        _cp: 'CP1',
        _ville: 'Paris',
        _courriel: 'etudiant@mail.fr',
        _genre: 'homme',
        _age: 25,
        _idCand: 1,
        _image: "assets/ressources/etud1.jpg"},

        { _nom: 'Nom2',
        _prenoms: 'Alexis',
        _rue: 'Rue2',
        _cp: 'CP2',
        _ville: 'Meaux',
        _courriel: 'etudiant2@mail.fr',
        _genre: 'femme',
        _age: 22,
        _idCand: 2,
        _image: "assets/ressources/etud2.jpg"},
        
        { _nom: 'Nom3',
        _prenoms: 'Didier',
        _rue: 'Rue3',
        _cp: 'CP3',
        _ville: 'Meaux',
        _courriel: 'etudiant3@mail.fr',
        _genre: 'femme',
        _age: 23,
        _idCand: 3,
        _image: "assets/ressources/etud3.jpg"},
    );
  }

  getEtudiants(): IEtudiant[] {
    return this.etudiants;
  }

  getEtudiantsParis(): IEtudiant[] {
    return this.etudiants.filter(etudiant => etudiant._ville === 'Paris');
  }

  getEtudiantsHorsParis(): IEtudiant[] {
    return this.etudiants.filter(etudiant => etudiant._ville !== 'Paris');
  }
}

