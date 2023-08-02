import { Component, ViewChild } from "@angular/core";
import { AnimationType } from "./animation.module";
import { TemplateComponent } from "./template/template.component";

@Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
})
export class AppComponent {
      title = 'projet_wolves';

      @ViewChild(TemplateComponent, {
            static: true
      })
      carousel!: TemplateComponent;

      animationType = AnimationType.Scale;

      constructor() { }

      setAnimationType(type: { value: AnimationType; }) {
            this.animationType = type.value;
            setTimeout(() => {
                  this.carousel.onNextClick();
            });
      }
}
