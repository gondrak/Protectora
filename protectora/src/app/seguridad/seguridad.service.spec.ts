import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from './seguridad.service';

describe('SeguridadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard]
    });
  });

  it('should ...', inject([AuthGuard], (service: AuthGuard) => {
    expect(service).toBeTruthy();
  }));
});
