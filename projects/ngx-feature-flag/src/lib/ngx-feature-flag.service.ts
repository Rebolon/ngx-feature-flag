import { Environment } from './environment.type';
import { Injectable, inject } from '@angular/core';
import { NGX_FEATURE_FLAG_ENVIRONMENT_TOKEN } from './if-is-enabled-environment.token';

@Injectable({
  providedIn: 'root'
})
export class NgxFeatureFlagService {
  private environment: Environment = inject(NGX_FEATURE_FLAG_ENVIRONMENT_TOKEN);

  isEnabled(featureName: string): boolean
  {
    return this.environment.features && this.environment.features[featureName] ? this.environment.features[featureName] : false;
  }
}
