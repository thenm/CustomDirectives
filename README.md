# Pagination

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

This is a demo app to understand how to create a custom structural and attribute directive. Created custom directive replicating the functionality of ngFor and ngClass

```javascript
export class AppForDirective {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('appFor') set render(times: number) {
    this.viewContainerRef.clear();
    for (let i = 0; i < times; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {index: i})
    }
  }
}
```


```javascript
export class DClassDirective {
 
  constructor(private element: ElementRef) { 
    
  }
  @Input('appClass') set classNames(classObj: any) {
    for(let key in classObj) {
      if(classObj[key]) {
        this.element.nativeElement.classList.add(key)
      } else {
        this.element.nativeElement.classList.remove(key)
      }
    }
  } 
}
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
