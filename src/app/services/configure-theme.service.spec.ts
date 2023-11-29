import { TestBed } from '@angular/core/testing';

import { ConfigureThemeService } from './configure-theme.service';

describe('ConfigureThemeService', () => {
  let service: ConfigureThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigureThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
