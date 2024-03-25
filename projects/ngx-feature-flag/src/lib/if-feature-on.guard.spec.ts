import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { ifFeatureOnGuard } from './if-feature-on.guard';
import { NGX_FEATURE_FLAG_ENVIRONMENT_TOKEN } from './if-feature-on-environment.token';

describe('myGuardGuard', () => {
  const enabledGuard: CanMatchFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => ifFeatureOnGuard('enabledFeature')(...guardParameters));
  const disabledGuard: CanMatchFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => ifFeatureOnGuard('disabledFeature')(...guardParameters));

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
