import { ListarCompraComponent } from './listar-compra/listar-compra.component';
import { NgModule } from '@angular/core';
import { CompraRoutingModule } from './compra-routing.module';
import { AdicionarCompraComponent } from './adicionar-compra/adicionar-compra.component';

@NgModule({
  declarations: [AdicionarCompraComponent, ListarCompraComponent],
  imports: [CompraRoutingModule],
})
export class CompraModule {}
