import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {environment} from "../environments/environment";
import {provideNgxFeatureFlags} from "@rebolon/ngx-feature-flag";

export const appConfig: ApplicationConfig = {
  providers: [
    provideNgxFeatureFlags(environment),
    provideRouter(routes)
  ]
};
