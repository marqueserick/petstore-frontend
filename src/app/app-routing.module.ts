import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pets',
    pathMatch: 'full'
  },
  {
    path: 'pets',
    loadChildren: () => import('./modules/pet/pet.module').then(m=> m.PetModule)
  },
  {
    path:'compras',
    loadChildren: () => import('./modules/compra/compra.module').then(m=>m.CompraModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
