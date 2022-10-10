import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from 'src/app/shared/model/Pet';
import { PetService } from 'src/app/shared/service/pet.service';

@Component({
  selector: 'app-alterar-pet',
  templateUrl: './alterar-pet.component.html',
  styleUrls: ['./alterar-pet.component.scss'],
})
export class AlterarPetComponent implements OnInit {
  pet: Pet;

  constructor(
    private activedRoute: ActivatedRoute,
    private service: PetService,
    private route: Router
  ) {}

  ngOnInit(): void {
    let petId = this.activedRoute.snapshot.queryParamMap.get('petId');
    if (petId != null && petId != undefined) {
      this.buscarProduto(petId);
    }
  }

  buscarProduto(petId) {
    this.service.buscarPorId(petId).subscribe((pet) =>
    {
      if(pet != null){
        this.pet = pet;
      }
    });
  }

  voltar(){
    this.route.navigate(['pets']);
  }
}
