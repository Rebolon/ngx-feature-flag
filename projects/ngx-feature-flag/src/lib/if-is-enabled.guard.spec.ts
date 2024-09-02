import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { ifIsEnabledGuard } from './if-is-enabled.guard';
import { NGX_FEATURE_FLAG_ENVIRONMENT_TOKEN } from './if-is-enabled-environment.token';

describe('myGuardGuard', () => {
  const enabledGuard: CanMatchFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => ifIsEnabledGuard('enabledFeature')(...guardParameters));
  const disabledGuard: CanMatchFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => ifIsEnabledGuard('disabledFeature')(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: NGX_FEATURE_FLAG_ENVIRONMENT_TOKEN,
          useValue: {
            features: {
              enabledFeature: true,
              disabledFeature: false,
            }
          }
        }
      ]
    });
  });

  it('Feature flag should be enabled', () => {
    expect(enabledGuard({}, [])).toBeTrue()
  });

  it('Feature flag should be disabled', () => {
    expect(disabledGuard({}, [])).toBeFalse()
  });
});
