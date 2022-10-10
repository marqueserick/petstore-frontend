import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarCompraComponent } from './adicionar-compra.component';

describe('AdicionarCompraComponent', () => {
  let component: AdicionarCompraComponent;
  let fixture: ComponentFixture<AdicionarCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
