import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { NgxFeatureFlagService } from './ngx-feature-flag.service';

export const ifFeatureOnGuard = (featureName: string): CanMatchFn => {
  return (route, segments) => {
    const featureFlagService = inject(NgxFeatureFlagService);
    return featureFlagService.isFeatureOn(featureName);
  }
};
