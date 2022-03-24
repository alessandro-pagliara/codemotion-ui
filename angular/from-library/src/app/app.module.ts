import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCodemotionUIModule } from 'components';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxCodemotionUIModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
