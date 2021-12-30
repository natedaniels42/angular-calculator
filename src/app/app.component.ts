import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';

  addText(value: string, input: HTMLInputElement): void {
    if ((/[\+\-\*\/]/.test(value) && /[\+\-\*\/]/.test(input.value)) || input.value.length === 18) {
      return;
    } else {
      input.value = input.value + value;
    }
  }
}
