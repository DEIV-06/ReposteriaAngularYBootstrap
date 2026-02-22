import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tartas } from './tartas';

describe('Tartas', () => {
  let component: Tartas;
  let fixture: ComponentFixture<Tartas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tartas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tartas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
