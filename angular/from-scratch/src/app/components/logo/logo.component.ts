import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: LogoComponent.selector,
  templateUrl: "./logo.component.html",
  styleUrls: ["./logo.component.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  static selector = `${environment.prefix}-logo`;
}
