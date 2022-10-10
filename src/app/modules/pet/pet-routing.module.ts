import { AlterarPetComponent } from './alterar-pet/alterar-pet.component';
import { AdicionarPetComponent } from './adicionar-pet/adicionar-pet.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CorpoPetComponent } from "./corpo-pet/corpo-pet.component";
import { ListarPetComponent } from "./listar-pet/listar-pet.component";

const routes: Routes = [
  {
      path: '',
      component: ListarPetComponent
  },
  {
    path:'novo',
    component: AdicionarPetComponent
  },
  {
    path: 'alterar',
    component: AlterarPetComponent
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]

})
export class PetRoutingModule {}
