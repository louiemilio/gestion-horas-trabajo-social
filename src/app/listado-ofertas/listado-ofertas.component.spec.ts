import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoOfertasComponent } from './listado-ofertas.component';

describe('ListadoOfertasComponent', () => {
  let component: ListadoOfertasComponent;
  let fixture: ComponentFixture<ListadoOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoOfertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
