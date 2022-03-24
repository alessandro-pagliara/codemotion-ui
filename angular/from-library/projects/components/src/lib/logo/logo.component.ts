import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { prefix } from '../common';

@Component({
  selector: LogoComponent.selector,
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  static selector = `${prefix}-logo`;
}
