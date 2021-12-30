import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'calculator'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('calculator');
  });

  describe('addText', () => {
    it ('should add text on click', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const displayText = (document.getElementById('displayText') as HTMLInputElement);
      const displayValue = displayText.value;
      const clickedValue = (document.getElementById('num1') as HTMLElement).innerText;
      app.addText(clickedValue, displayText);
      expect(displayValue + clickedValue).toEqual(displayText.value);
    })

    it ('should not allow text to add on operator if operator is already in text', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const displayText = (document.getElementById('displayText') as HTMLInputElement);
      displayText.value = '123+23';
      const displayValue = displayText.value;
      const clickedValue = (document.getElementById('plus') as HTMLElement).innerText;
      app.addText(clickedValue, displayText);
      expect(displayValue).toEqual(displayText.value);
    })

    it ('should not allow text to be added if the length of text is already 18 characters', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const displayText = (document.getElementById('displayText') as HTMLInputElement);
      displayText.value = '1234567890+1234567';
      const displayValue = displayText.value;
      const clickedValue = (document.getElementById('num1') as HTMLElement).innerText;
      app.addText(clickedValue, displayText);
      expect(displayValue).toEqual(displayText.value);
    })

    // it ('should clear the input first if calculated is true', () => {
    //   const fixture = TestBed.createComponent(AppComponent);
    //   const app = fixture.componentInstance;
    //   const displayText = (document.getElementById('displayText') as HTMLInputElement);
    //   displayText.
    //   const clickedValue = (document.getElementById('num1') as HTMLElement).innerText;
    // })
  })

  describe('clear', () => {
    it ('should clear the input text', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const displayText = (document.getElementById('displayText') as HTMLInputElement);
      displayText.value = '1234';
      app.clear(displayText);
      expect(displayText.value).toEqual('');
    })
  })

  describe('evaluate', () => {
    it ('contains +', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const displayText = (document.getElementById('displayText') as HTMLInputElement);
      displayText.value = '12+34';
      app.evaluate(displayText);
      expect(displayText.value).toEqual('46');
    })

    it ('contains -', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const displayText = (document.getElementById('displayText') as HTMLInputElement);
      displayText.value = '12-3';
      app.evaluate(displayText);
      expect(displayText.value).toEqual('9');
    })

    it ('contains *', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const displayText = (document.getElementById('displayText') as HTMLInputElement);
      displayText.value = '12*3';
      app.evaluate(displayText);
      expect(displayText.value).toEqual('36');
    })

    it ('contains / and the number after is xero', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const displayText = (document.getElementById('displayText') as HTMLInputElement);
      displayText.value = '12/0';
      app.evaluate(displayText);
      expect(displayText.value).toEqual('Error');
    })

    it ('contains /', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const displayText = (document.getElementById('displayText') as HTMLInputElement);
      displayText.value = '12/3';
      app.evaluate(displayText);
      expect(displayText.value).toEqual('4');
    })

    it ('contains any character that is not a number or an operator (+-*/)', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const displayText = (document.getElementById('displayText') as HTMLInputElement);
      displayText.value = 'abc';
      app.evaluate(displayText);
      expect(displayText.value).toEqual('Error');
    })
  })
});
