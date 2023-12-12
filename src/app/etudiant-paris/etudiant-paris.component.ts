import { Component, OnInit } from '@angular/core';
import { IEtudiant } from '../models/ietudiant';
import { EtudiantServiceService } from '../services/etudiant-service.service';


@Component({
  selector: 'app-etudiant-paris',
  templateUrl: './etudiant-paris.component.html',
  styleUrls: ['./etudiant-paris.component.css']
})
export class EtudiantParisComponent {
  etudiantsParis: IEtudiant[] = [];

  constructor(private etudiantService: EtudiantServiceService) { }

  ngOnInit(): void {
    this.etudiantsParis = this.etudiantService.getEtudiantsParis();
  }
}
