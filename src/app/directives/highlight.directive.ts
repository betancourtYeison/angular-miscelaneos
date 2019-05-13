import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  @Input("appHighlight") backgroundColor: string;

  constructor(private _elementRef: ElementRef) {
    this.highlight("#28a745");
  }

  @HostListener("mouseenter") mouseEnter() {
    this.highlight(this.backgroundColor || "#138496");
  }

  @HostListener("mouseleave") mouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this._elementRef.nativeElement.style.backgroundColor = color;
  }
}
