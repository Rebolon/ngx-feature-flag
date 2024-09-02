import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { NGX_FEATURE_FLAG_ENVIRONMENT_TOKEN } from "./if-is-enabled-environment.token";
import { NgxFeatureFlagService } from "./ngx-feature-flag.service";
import { Environment } from "./environment.type";

export function provideNgxFeatureFlags(environment: Environment): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: NGX_FEATURE_FLAG_ENVIRONMENT_TOKEN,
      useValue: environment
    },
    NgxFeatureFlagService,
  ]);
}
