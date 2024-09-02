import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IfIsEnabledDirective } from './if-is-enabled.directive';
import { NGX_FEATURE_FLAG_ENVIRONMENT_TOKEN } from './if-is-enabled-environment.token';

@Component({
  selector: 'test-directive-if-feature-on',
  imports: [IfIsEnabledDirective],
  standalone: true,
  template: `
    <div>
      <div *ifFeatureOn="'enabledFeature'" id="displayed">Display this div</div>
      <div *ifFeatureOn="'disabledFeature'" id="hidden">Do not display this div</div>
    </div>
  `,
})
export class TestDirectiveIfFeatureOnComponent {}

let fixture: ComponentFixture<TestDirectiveIfFeatureOnComponent>;
let sut: TestDirectiveIfFeatureOnComponent;
describe('IfIsEnabledDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: NGX_FEATURE_FLAG_ENVIRONMENT_TOKEN,
          useValue: {
            features: {
              enabledFeature: true,
              disabledFeature: false,
            }
          }
        }
      ],
      imports: [IfIsEnabledDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestDirectiveIfFeatureOnComponent);
    sut = fixture.componentInstance
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(sut).toBeDefined();
  });

  it('should display or hiden dom based on features flag', () => {
    expect(fixture.nativeElement.querySelector('#displayed').innerText).toEqual('Display this div');
    expect(fixture.nativeElement.querySelector('#hidden')).toBeNull();
  });
});
