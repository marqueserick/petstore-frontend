import { element } from 'protractor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetService } from '../../../shared/service/pet.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pet } from 'src/app/shared/model/Pet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pet',
  templateUrl: './listar-pet.component.html',
  styleUrls: ['./listar-pet.component.scss']
})
export class ListarPetComponent implements OnInit {

  pets: Pet[] = [];
  status: string[] = [];
  petSelecionado: Pet;
  confirmaExclusao: string;
  titulo:string;
  corpo:string;
  statusSelecionado:string;
  filtrarPorStatus: FormGroup;

  constructor(private service: PetService,
    private modal: NgbModal,
    private route: Router,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.listarPets();
    this.listarStatus();
    this.setFiltrarPorStatusForm();
  }
  setFiltrarPorStatusForm() {
    this.filtrarPorStatus = this.fb.group({
      status:['',Validators.compose([Validators.required, Validators.minLength(1)])
    ],
    });
  }
  listarPets() {
    this.service.todosPets().subscribe((pets) => {
      if(pets != null){
        this.pets = pets;
      }
    })
  }

  listarStatus() {
    this.service.status().subscribe((status) => {
      if(status != null){
        this.status = status;
      }
    })
  }

  visualizarPet(pet:Pet){
    console.log(pet);

  }

  deletarPet(content, contentErro, pet:Pet){
    if(pet.status == 'DISPONIVEL'){
      this.setModalText(pet);
      this.modal.open(content,{size: 'lg'});
      this.petSelecionado = pet;
    }else{
      this.setModalErroText('Excluir Pet', 'Não é possível excluir pet com status VENDIDO ou PENDENTE');
      this.modal.open(contentErro,{size: 'sm'});
    }

  }
  deletar(){
    this.service.deletar(this.petSelecionado.petId).subscribe(()=>{
      this.listarPets();
    })
  }

  setModalText(pet: Pet){
    this.confirmaExclusao = "Tem certeza que deseja excluir "+ pet.nome;
  }

  setModalErroText(titulo: string, corpo: string) {
    this.titulo = titulo;
    this.corpo = corpo;
  }

  adicionar(){
    this.route.navigate(['pets/novo']);
  }

  alterar(id: number){
    this.route.navigate(['pets/alterar'],
    {
      queryParams : {
        petId : JSON.stringify(id)
      }
    });
  }

  filtrarPets(){
    this.statusSelecionado = this.filtrarPorStatus.controls['status'].value;
    if(this.statusSelecionado != 'TODOS'){
    this.service.buscarPorStatus(this.statusSelecionado).subscribe((pets)=>
    {
      if(pets != null){
        this.pets = pets;
      }
    })
    }else{
      this.listarPets();
    }
  }
  comprar(pet:Pet, contentErro){
    if(pet.status == 'DISPONIVEL'){
    this.route.navigate(['compras/nova']);
    }else{
      this.setModalErroText('Vender Pet', 'Esse pet não está disponível para venda');
      this.modal.open(contentErro,{size: 'sm'});
    }
  }

}
