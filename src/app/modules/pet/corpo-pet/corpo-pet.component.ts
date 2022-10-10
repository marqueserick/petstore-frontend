import { Router } from '@angular/router';
import { CategoriaService } from './../../../shared/service/categoria.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Categoria } from 'src/app/shared/model/Categoria';
import { Pet } from 'src/app/shared/model/Pet';
import { PetService } from 'src/app/shared/service/pet.service';
import { PetDto } from 'src/app/shared/model/PetDto';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-corpo-pet',
  templateUrl: './corpo-pet.component.html',
  styleUrls: ['./corpo-pet.component.scss'],
})
export class CorpoPetComponent implements OnInit {
  @Input()
  acao: string;

  @Input()
  petAlterar: Pet;

  pet: PetDto;

  formPet: FormGroup;
  categorias: Categoria[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService,
    private service: PetService,
    private route: Router,
    private modal: NgbModal
  ) {}

  ngOnInit(): void {
    this.listarCategorias();
    if (this.acao == 'ADICIONAR') {
      this.setFormGroupAdicionar();
    } else {
      this.setFormGroupAlterar();
    }
  }
  listarCategorias() {
    this.categoriaService.getCategorias().subscribe((categorias) => {
      if (categorias != null) {
        this.categorias = categorias;
      }
    });
  }
  setFormGroupAdicionar() {
    this.pet = new Pet();
    this.formPet = this.formBuilder.group({
      nome: [
        '',
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      status: [{ value: 'DISPONIVEL', disabled: true }],
      categoria: [
        '',
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
    });
  }

  setFormGroupAlterar() {
    this.formPet = this.formBuilder.group({
      id: [{ value: this.petAlterar.petId, disabled: true }],
      nome: [
        this.petAlterar.nome,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      status: [{ value: this.petAlterar.status, disabled: true }],
      categoria: [{ value: this.petAlterar.categoria.nome, disabled: true }],
    });
  }

  salvar() {
    if (this.acao == 'ADICIONAR') {
      this.criarPet();
      this.service.salvar(this.pet).subscribe((pets) => {
        if (pets != null) {
          this.listarPets();
        }
      });
    } else if(this.acao == "ALTERAR"){
      this.editarPet();
      this.service.alterar(this.petAlterar).subscribe((pets)=>
      {
        if(pets != null){
          this.listarPets();
        }
      })
    }
  }
  editarPet() {
    this.petAlterar.petId = this.formPet.controls['id'].value;
    this.petAlterar.nome = this.formPet.controls['nome'].value;
    this.petAlterar.status = this.formPet.controls['status'].value;
  }

  criarPet() {
    this.pet = new PetDto();
    this.pet.nome = this.formPet.controls['nome'].value;
    this.pet.status = this.formPet.controls['status'].value;
    this.pet.categoria = this.formPet.controls['categoria'].value;
  }

  listarPets() {
    this.route.navigate(['pets']);
  }

  abrirModalCancelar(content) {
    this.modal.open(content, { size: 'sm' });
  }
}
