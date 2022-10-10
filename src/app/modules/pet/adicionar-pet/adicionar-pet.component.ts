
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from 'src/app/shared/model/Pet';
import { PetService } from 'src/app/shared/service/pet.service';

@Component({
  selector: 'app-adicionar-pet',
  templateUrl: './adicionar-pet.component.html',
  styleUrls: ['./adicionar-pet.component.scss']
})
export class AdicionarPetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
