import { NullTemplateVisitor } from '@angular/compiler';
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

  clear(input: HTMLInputElement) {
    input.value = '';
  }

  evaluate(input: HTMLInputElement) {
    if (/\+/.test(input.value)) {
      input.value = input.value.split('+').reduce((a,c) => +a + +c, 0).toString();
    } else if (/\-/.test(input.value)) {
      const values = input.value.split('-');
      input.value = (+values[0] - +values[1]).toString();
    } else if (/\*/.test(input.value)) {
      input.value = input.value.split('*').reduce((a,c) => +a * +c, 1).toString();
    }
  }
}
