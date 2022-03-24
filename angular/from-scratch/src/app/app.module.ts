import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent, IconComponent, InputComponent, LogoComponent } from './components';

const Components = [ButtonComponent, IconComponent, InputComponent, LogoComponent];

@NgModule({
  declarations: [Components],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
})
export class AppModule implements DoBootstrap {
  constructor(private readonly _injector: Injector) {}

  ngDoBootstrap() {
    for (const component of Components) {
      const element = createCustomElement<typeof component>(component, { injector: this._injector });
      customElements.define(component.selector, element);
    }
  }
}
