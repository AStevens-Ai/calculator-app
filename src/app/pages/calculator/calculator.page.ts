import { Component, OnInit } from '@angular/core';
import { ConfigureThemeService } from 'src/app/services/configure-theme.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  display: string = '';
  buttons: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='];

  // Declare the currentCssClass property
  currentCssClass: string = '';

  constructor(private configureThemeService: ConfigureThemeService) { }

  ngOnInit() {
    // Subscribe to changes in the CSS class
    this.configureThemeService.cssClass$.subscribe((cssClass) => {
      // Update the currentCssClass property
      this.currentCssClass = cssClass;
    });
  }

  onButtonClicked(button: string): void {
    if (button === 'C') {
      this.display = '';
    } else if (button === '=') {
      try {
        this.display = eval(this.display);
      } catch (error) {
        this.display = 'Error';
      }
    } else {
      this.display += button;
    }
  }
}
