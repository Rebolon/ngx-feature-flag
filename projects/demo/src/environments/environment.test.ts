import { FeatureFlagType } from '@rebolon/ngx-feature-flag';

const features: FeatureFlagType = {
  enabledFeature: true,
  disabledFeature: false,
};
export const environment = {
  features
};
