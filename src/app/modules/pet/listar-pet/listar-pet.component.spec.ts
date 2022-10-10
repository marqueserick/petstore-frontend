import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPetComponent } from './listar-pet.component';

describe('ListarPetComponent', () => {
  let component: ListarPetComponent;
  let fixture: ComponentFixture<ListarPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
