import { Component, OnInit } from '@angular/core';
import { IEtudiant } from '../models/ietudiant';
import { EtudiantServiceService } from '../services/etudiant-service.service';

@Component({
  selector: 'app-etudiant-hors-paris',
  templateUrl: './etudiant-hors-paris.component.html',
  styleUrls: ['./etudiant-hors-paris.component.css']
})
export class EtudiantHorsParisComponent {
  etudiantsHorsParis: IEtudiant[] = [];

  constructor(private etudiantService: EtudiantServiceService) { }

  ngOnInit(): void {
    this.etudiantsHorsParis = this.etudiantService.getEtudiantsHorsParis();
  }
}
