import { Directive, ElementRef, Input, OnInit } from '@angular/core';

import * as Waves from 'node-waves';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[rippleEffect]'
})
export class RippleEffectDirective implements OnInit {
  // Private
  private _nativeElement: any;
  @Input() wave: string;
  /**
   * Constructor
   *
   * @param {ElementRef} _elementRef
   */
  constructor(private _elementRef: ElementRef) {}

  ngOnInit(): void {
    // Get the native element
    this._nativeElement = this._elementRef.nativeElement;

    if (
      // Attach ripple with light style i.e solid variant of button
      !this._nativeElement.className.split(' ').some(function (c) {
        return /btn-outline-.*/.test(c);
      }) &&
      !this._nativeElement.className.split(' ').some(function (c) {
        return /btn-flat-.*/.test(c);
      })
    ) {
      Waves.attach(this._nativeElement, ['waves-float', 'waves-light']);
    } else {
      // Attach ripple with transparent style i.e flat, outline variant of button
      Waves.attach(this._nativeElement);
    }
  }
}
