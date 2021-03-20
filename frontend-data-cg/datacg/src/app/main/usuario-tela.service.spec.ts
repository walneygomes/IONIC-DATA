import { TestBed } from '@angular/core/testing';

import { UsuarioTElaService } from './usuario-tela.service';

describe('UsuarioTElaService', () => {
  let service: UsuarioTElaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioTElaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
