import { TestBed } from '@angular/core/testing';

import { NGX_FEATURE_FLAG_ENVIRONMENT_TOKEN } from './if-is-enabled-environment.token';
import { NgxFeatureFlagService } from './ngx-feature-flag.service';

describe('FeatureFlagService', () => {
  let service: NgxFeatureFlagService;

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
    })

    TestBed.runInInjectionContext(() => {
      service = new NgxFeatureFlagService()
    })
  })

  it('Feature flag should be enabled', () => {
    expect(service.isEnabled('enabledFeature')).toBeTrue()
  });

  it('Feature flag should be disabled', () => {
    expect(service.isEnabled('disabledFeature')).toBeFalse()
  });
});
