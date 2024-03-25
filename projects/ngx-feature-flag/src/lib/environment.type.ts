import { FeatureFlagType } from "./feature-flag.type";

export type Environment = {
  [key: string]: unknown
  features: FeatureFlagType
}
