import { InjectionToken } from "@angular/core";
import { Environment } from "./environment.type";

export const NGX_FEATURE_FLAG_ENVIRONMENT_TOKEN = new InjectionToken<Environment>('NgxFeatureFlagEnvironment');
