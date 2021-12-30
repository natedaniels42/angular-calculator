import { NullTemplateVisitor } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  calculated = false;

  addText(value: string, input: HTMLInputElement): void {
    if ((/[\+\-\*\/]/.test(value) && /[\+\-\*\/]/.test(input.value)) || input.value.length === 18) {
      return;
    } else {
      if (this.calculated) {
        input.value = '';
      }
      input.value = input.value + value;
      this.calculated = false;
    }
  }

  clear(input: HTMLInputElement) {
    input.value = '';
  }

  evaluate(input: HTMLInputElement) {
    const tooBig = (num: number): boolean => {
      return num > Number.MAX_SAFE_INTEGER;
    }

    if (/[^\d\+\-\*\/]/.test(input.value)) {
      input.value = 'Error';
    } else if (/\+/.test(input.value)) {
      const values = input.value.split('+');
      if (tooBig(Number(values[0])) || tooBig(Number(values[1]))) {
        input.value = 'Error';
      } else {
        input.value = values.reduce((a,c) => +a + +c, 0).toString();
      }
    } else if (/\-/.test(input.value)) {
      const values = input.value.split('-');
      if (tooBig(Number(values[0])) || tooBig(Number(values[1]))) {
        input.value = 'Error';
      } else {
        input.value = (+values[0] - +values[1]).toString();
      }
    } else if (/\*/.test(input.value)) {
      const values = input.value.split('*');
      if (tooBig(Number(values[0])) || tooBig(Number(values[1]))) {
        input.value = 'Error';
      } else {
        input.value = input.value.split('*').reduce((a,c) => +a * +c, 1).toString();
      }
    } else if (/\//.test(input.value)) {
      const values = input.value.split('/');
      if (Number(values[1]) === 0 || tooBig(Number(values[0])) || tooBig(Number(values[1]))) {
        input.value = 'Error';
      } else {
        input.value = (+values[0] / +values[1]).toString();
      }
    }
    this.calculated = true;
  }
}
