import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigureCalculatorPage } from './configure-calculator.page';

describe('ConfigureCalculatorPage', () => {
  let component: ConfigureCalculatorPage;
  let fixture: ComponentFixture<ConfigureCalculatorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfigureCalculatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
