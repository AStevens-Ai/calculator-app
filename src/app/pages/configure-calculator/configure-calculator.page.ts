import { Component, Input, OnInit } from '@angular/core';
import { ConfigureThemeService } from 'src/app/services/configure-theme.service';
@Component({
  selector: 'app-configure-calculator',
  templateUrl: './configure-calculator.page.html',
  styleUrls: ['./configure-calculator.page.scss'],
})
export class ConfigureCalculatorPage implements OnInit {
  selectedColor: string = 'red';
  selectedBackground: string = 'purple';
  selectedInput: string = 'red';
  constructor(private configureThemeService: ConfigureThemeService) { }


  ngOnInit() {

  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  selectBackground(background: string) {
    this.selectedBackground = background;
  }

  selectInput(input: string) {
    this.selectedInput = input;
  }

  applyStyles() {
    const cssClass = `${this.selectedColor}-ion-button ${this.selectedBackground}-background ${this.selectedInput}-ion-input`;
    this.configureThemeService.updateCssClass(cssClass);
  }
}

