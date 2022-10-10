import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../model/Pet';
import { PetDto } from '../model/PetDto';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private path = 'pet';
  //path = 'https://6224f3e66c0e3966204adb03.mockapi.io/consultlab/api/v1/especialidades'

  constructor(private service: HttpService) { }

  todosPets(): Observable<any>{
    return this.service.get(this.path);
  }

  buscarPorId(petId: number) {
    return this.service.get(`${this.path}/${petId}`);
  }
  buscarPorStatus(status:string){
    return this.service.get(`${this.path}/buscarPorStatus?status=${status}`)
  }

  deletar(id: number) {
    return this.service.delete(`${this.path}/${id}`);
  }

  salvar(pet: PetDto) {
    return this.service.post(this.path, pet);
  }

  alterar(pet: Pet):Observable<any> {
    return this.service.put(`${this.path}`, pet);
  }

  status(){
    return this.service.get(`${this.path}/status`);
  }
}
