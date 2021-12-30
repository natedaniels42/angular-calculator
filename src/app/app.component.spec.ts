import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let displayText: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    displayText = (document.getElementById('displayText') as HTMLInputElement);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  describe('buttons', () => {
    it ('1 button exists', () => {
      const button = document.getElementById('num1');
      expect(button).toBeTruthy();
    });

    it ('2 button exists', () => {
      const button = document.getElementById('num2');
      expect(button).toBeTruthy();
    });

    it ('3 button exists', () => {
      const button = document.getElementById('num3');
      expect(button).toBeTruthy();
    });

    it ('4 button exists', () => {
      const button = document.getElementById('num4');
      expect(button).toBeTruthy();
    });

    it ('5 button exists', () => {
      const button = document.getElementById('num5');
      expect(button).toBeTruthy();
    });

    it ('6 button exists', () => {
      const button = document.getElementById('num6');
      expect(button).toBeTruthy();
    });

    it ('7 button exists', () => {
      const button = document.getElementById('num7');
      expect(button).toBeTruthy();
    });

    it ('8 button exists', () => {
      const button = document.getElementById('num8');
      expect(button).toBeTruthy();
    });

    it ('9 button exists', () => {
      const button = document.getElementById('num9');
      expect(button).toBeTruthy();
    });

    it ('0 button exists', () => {
      const button = document.getElementById('num0');
      expect(button).toBeTruthy();
    });

    it ('plus button exists', () => {
      const button = document.getElementById('plus');
      expect(button).toBeTruthy();
    });

    it ('minus button exists', () => {
      const button = document.getElementById('minus');
      expect(button).toBeTruthy();
    });

    it ('multiply button exists', () => {
      const button = document.getElementById('multiply');
      expect(button).toBeTruthy();
    });

    it ('divide button exists', () => {
      const button = document.getElementById('divide');
      expect(button).toBeTruthy();
    });

    it ('equal button exists', () => {
      const button = document.getElementById('equal');
      expect(button).toBeTruthy();
    });

    it ('clear button exists', () => {
      const button = document.getElementById('clear');
      expect(button).toBeTruthy();
    })
  });

  describe('addText', () => {
    it ('should add text on click', () => {
      const displayValue = displayText.value;
      const clickedValue = (document.getElementById('num1') as HTMLElement).innerText;
      app.addText(clickedValue, displayText);
      expect(displayValue + clickedValue).toEqual(displayText.value);
    })

    it ('should not allow text to add on operator if operator is already in text', () => {
      displayText.value = '123+23';
      const displayValue = displayText.value;
      const clickedValue = (document.getElementById('plus') as HTMLElement).innerText;
      app.addText(clickedValue, displayText);
      expect(displayValue).toEqual(displayText.value);
    })

    it ('should not allow text to be added if the length of text is already 18 characters', () => {
      displayText.value = '1234567890+1234567';
      const displayValue = displayText.value;
      const clickedValue = (document.getElementById('num1') as HTMLElement).innerText;
      app.addText(clickedValue, displayText);
      expect(displayValue).toEqual(displayText.value);
    })

    it ('should clear the input first if calculated is true', () => {
      displayText.value = '1234';
      app.calculated = true;
      const clickedValue = (document.getElementById('num1') as HTMLElement).innerText;
      app.addText(clickedValue, displayText);
      expect(displayText.value).toEqual(clickedValue);
    })
  })

  describe('clear', () => {
    it ('should clear the input text', () => {
      displayText.value = '1234';
      app.clear(displayText);
      expect(displayText.value).toEqual('');
    })
  })

  describe('evaluate', () => {
    it ('contains +', () => {
      displayText.value = '12+34';
      app.evaluate(displayText);
      expect(displayText.value).toEqual('46');
    })

    it ('contains -', () => {
      displayText.value = '12-3';
      app.evaluate(displayText);
      expect(displayText.value).toEqual('9');
    })

    it ('contains *', () => {
      displayText.value = '12*3';
      app.evaluate(displayText);
      expect(displayText.value).toEqual('36');
    })

    it ('contains / and the number after is xero', () => {
      displayText.value = '12/0';
      app.evaluate(displayText);
      expect(displayText.value).toEqual('Error');
    })

    it ('contains /', () => {
      displayText.value = '12/3';
      app.evaluate(displayText);
      expect(displayText.value).toEqual('4');
    })

    it ('contains any character that is not a number or an operator (+-*/)', () => {
      displayText.value = 'abc';
      app.evaluate(displayText);
      expect(displayText.value).toEqual('Error');
    })

    it ('contains a number greater than the max safe integer', () => {
      displayText.value = '9999999999999999*9';
      app.evaluate(displayText);
      expect(displayText.value).toEqual('Error');
    })

    it ('numbers total up to an amount above max safe integer', () => {
      displayText.value = '999999999999999*99';
      app.evaluate(displayText);
      expect(displayText.value).toEqual('Error');
    })
  })
});
