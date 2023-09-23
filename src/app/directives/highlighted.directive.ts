import { Directive, EventEmitter, HostBinding, HostListener, Input, Output, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[highlighted]',
  exportAs:'hl'
})
export class HighlightedDirective {

@Input('highlighted')
isHighlighted=false;

@Output()
toggleHighlight = new EventEmitter();

  constructor() { 
    console.log("Directive created");
  }

/*@HostBinding('className')
  get applyClasses(){
    return "highlighted";
  }

@HostBinding('attr.disabled')
get makeDisable(){
  return true
}

@HostBinding('style.border')
get applyStyle(){
  return "5px solid yellow";
}*/
  @HostBinding('class.highlighted')
  get applyClasses(){
    return this.isHighlighted;
  }

  @HostListener('mouseover',['$event'])
    mouseOver($event){
      console.log($event);
      this.isHighlighted = true;
      this.toggleHighlight.emit(this.isHighlighted);
   
    }

  @HostListener('mouseleave')
  mouseLeave(){
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);

  }
  
  toggle(){
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }


}
