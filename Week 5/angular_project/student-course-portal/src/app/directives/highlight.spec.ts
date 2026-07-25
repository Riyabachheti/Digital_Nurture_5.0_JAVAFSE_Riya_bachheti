import { ElementRef } from '@angular/core';
import { Highlight } from './highlight';

describe('Highlight', () => {
  it('should create an instance', () => {
    const element = new ElementRef(document.createElement('div'));
    const directive = new Highlight(element);

    expect(directive).toBeTruthy();
  });
});