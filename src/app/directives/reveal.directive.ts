import { Directive, ElementRef, AfterViewInit } from '@angular/core';

// Usage: add [appReveal] to any element. It gets the .reveal class immediately
// and .visible once it scrolls into view, matching the CSS transition in styles.css.
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit {
  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.el.nativeElement.classList.add('reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(this.el.nativeElement);
  }
}
