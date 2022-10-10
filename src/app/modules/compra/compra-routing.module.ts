import { AdicionarCompraComponent } from './adicionar-compra/adicionar-compra.component';
import { ListarCompraComponent } from './listar-compra/listar-compra.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes:Routes = [
  {
    path: '',
    component: ListarCompraComponent
  },
  {
    path:'nova',
    component: AdicionarCompraComponent
  }
]


@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]

})
export class CompraRoutingModule{

}
