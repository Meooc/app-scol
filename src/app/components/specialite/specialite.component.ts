import { Component, OnInit } from '@angular/core';
import { ISpecialite } from 'src/app/models/ispecialite';
import { SpecServiceService } from 'src/app/services/spec-service.service'; 

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent implements OnInit {
  specialites: ISpecialite[] = [];

  constructor(private specService: SpecServiceService) {}

  ngOnInit(): void {
    this.specialites = this.specService.getSpecialites();
  }
}
