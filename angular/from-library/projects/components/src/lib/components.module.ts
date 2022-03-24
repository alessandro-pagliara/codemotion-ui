import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent, IconComponent, InputComponent, LogoComponent } from '.';

export const Components = [ButtonComponent, IconComponent, InputComponent, LogoComponent];

@NgModule({
  declarations: [Components],
  imports: [CommonModule],
  exports: [Components],
})
export class NgxCodemotionUIModule {}
