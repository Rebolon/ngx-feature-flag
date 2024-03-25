import { Directive, InputSignal, TemplateRef, ViewContainerRef, effect, inject, input } from '@angular/core';
import { NgxFeatureFlagService } from './ngx-feature-flag.service';

@Directive({
  selector: '[ifFeatureOn]',
  standalone: true
})
export class IfFeatureOnDirective {
  templateRef = inject(TemplateRef);
  viewContainer = inject(ViewContainerRef);
  NgxFeatureFlagService = inject(NgxFeatureFlagService);

  featureName: InputSignal<string> = input.required({alias: "ifFeatureOn"});

  constructor() {
    effect(() => {
      if (this.NgxFeatureFlagService.isFeatureOn(this.featureName())) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    })
  }
}
