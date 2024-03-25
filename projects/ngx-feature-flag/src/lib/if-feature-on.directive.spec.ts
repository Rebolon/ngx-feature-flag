import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IfFeatureOnDirective } from './if-feature-on.directive';
import { NGX_FEATURE_FLAG_ENVIRONMENT_TOKEN } from './if-feature-on-environment.token';

@Component({
  selector: 'test-directive-if-feature-on',
  imports: [IfFeatureOnDirective],
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
describe('IfFeatureOnDirective', () => {
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
      imports: [IfFeatureOnDirective]
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
