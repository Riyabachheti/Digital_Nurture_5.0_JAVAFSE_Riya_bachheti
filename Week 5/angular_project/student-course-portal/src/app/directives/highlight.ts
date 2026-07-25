import {
  Directive,
  ElementRef,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {

  @Input() appHighlight = 'yellow';

  constructor(private element: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log('mouseenter');

    this.element.nativeElement.style.backgroundColor = this.appHighlight;
    this.element.nativeElement.style.transition = '0.2s';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    console.log('mouseleave');

    this.element.nativeElement.style.backgroundColor = '';
  }
}