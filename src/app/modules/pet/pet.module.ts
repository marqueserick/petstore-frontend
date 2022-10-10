import { NgModel, ReactiveFormsModule } from '@angular/forms';
import { PetRoutingModule } from './pet-routing.module';
import { ListarPetComponent } from './listar-pet/listar-pet.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CorpoPetComponent } from './corpo-pet/corpo-pet.component';
import { AdicionarPetComponent } from './adicionar-pet/adicionar-pet.component';
import { AlterarPetComponent } from './alterar-pet/alterar-pet.component';

@NgModule({
  declarations:[
    ListarPetComponent,
    CorpoPetComponent,
    AdicionarPetComponent,
    AlterarPetComponent
  ],
  imports:  [
    PetRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class PetModule{

}
