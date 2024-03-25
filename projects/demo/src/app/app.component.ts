import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { provideNgxFeatureFlags, IfFeatureOnDirective, NGX_FEATURE_FLAG_ENVIRONMENT_TOKEN, NgxFeatureFlagService } from '@rebolon/ngx-feature-flag';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IfFeatureOnDirective],
  template: `
    <h1>Hello</h1>
    <h2>Using Directive</h2>
    <div>
        <div *ifFeatureOn="'enabledFeature'" id="displayed">Display this div for enabled feature</div>
        <div *ifFeatureOn="'disabledFeature'" id="hidden">Do not display this div</div>
    </div>
    <h2>Using Service and Control Flow</h2>
    @if (FeatureFlagService.isFeatureOn('enabledFeature')) {
    <div style="background-color: green;">Enabled feature</div>
    }
    @if (!FeatureFlagService.isFeatureOn('disabledOrUnknownFeature')) {
    <div style="background-color: red;">Disabled or unknown feature</div>
    }
  `,
})
export class AppComponent {
  title = 'demo ng-feature-flag';
  FeatureFlagService = inject(NgxFeatureFlagService);
  envTokenConst = inject(NGX_FEATURE_FLAG_ENVIRONMENT_TOKEN);
}
