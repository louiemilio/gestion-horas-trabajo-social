import { TestBed } from '@angular/core/testing';

import { LugaresTrabajadosService } from './lugares-trabajados.service';

describe('LugaresTrabajadosService', () => {
  let service: LugaresTrabajadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LugaresTrabajadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
