import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { NgxFeatureFlagService } from './ngx-feature-flag.service';

export const ifIsEnabledGuard = (featureName: string): CanMatchFn => {
  return (route, segments) => {
    const featureFlagService = inject(NgxFeatureFlagService);
    return featureFlagService.isEnabled(featureName);
  }
};
