import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoPetComponent } from './corpo-pet.component';

describe('CorpoPetComponent', () => {
  let component: CorpoPetComponent;
  let fixture: ComponentFixture<CorpoPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorpoPetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpoPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
