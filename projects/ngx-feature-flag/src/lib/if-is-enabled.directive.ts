import { Directive, InputSignal, TemplateRef, ViewContainerRef, effect, inject, input } from '@angular/core';
import { NgxFeatureFlagService } from './ngx-feature-flag.service';

@Directive({
  selector: '[ifIsEnabled]',
  standalone: true
})
export class IfIsEnabledDirective {
  templateRef = inject(TemplateRef);
  viewContainer = inject(ViewContainerRef);
  NgxFeatureFlagService = inject(NgxFeatureFlagService);

  featureName: InputSignal<string> = input.required({alias: "ifIsEnabled"});

  constructor() {
    effect(() => {
      if (this.NgxFeatureFlagService.isEnabled(this.featureName())) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    })
  }
}
