import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pasteles } from './pasteles';

describe('Pasteles', () => {
  let component: Pasteles;
  let fixture: ComponentFixture<Pasteles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pasteles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pasteles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
