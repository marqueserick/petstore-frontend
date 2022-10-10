import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarPetComponent } from './alterar-pet.component';

describe('AlterarPetComponent', () => {
  let component: AlterarPetComponent;
  let fixture: ComponentFixture<AlterarPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarPetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
