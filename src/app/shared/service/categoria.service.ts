import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
private path:string = 'categorias';

constructor(private service: HttpService) { }

getCategorias(): Observable<any>{
  return this.service.get(this.path);
}

}
