import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor() { }

  @HostBinding('class.plus-hover') isActive = false;

  @HostListener('mouseenter', ['$event']) onEnter(target) {
    target.preventDefault();
    target.stopPropagation();
    this.isActive = true;
  }

  @HostListener('mouseleave', ['$event']) onLeave(target) {
    target.preventDefault();
    target.stopPropagation();
    this.isActive = false;
  }

}
