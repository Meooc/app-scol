import { Injectable } from '@angular/core';
import { ISpecialite } from '../models/ispecialite';

@Injectable({
  providedIn: 'root'
})
export class SpecServiceService {
  private specialites: ISpecialite[] = [];
  
  constructor(){
    this.specialites.push(
      { _libelle: 'Info',
        _idSpec: 1,
        _image: "assets/ressources/info.jpg"},
      { _libelle: 'Maths',
        _idSpec: 2,
        _image: "assets/ressources/maths.jpg"},
    );
  }

    getSpecialites(): ISpecialite[] {
      return this.specialites;
  }
}
