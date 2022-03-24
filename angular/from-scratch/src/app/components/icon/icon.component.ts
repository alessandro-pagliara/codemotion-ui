import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from "@angular/core";
import { environment } from "src/environments/environment";

export type IconName = "eye" | "eye-off" | "lock-closed" | "";
export type IconColor = "primary" | "secondary";

const spritePath = "assets/svg/sprite.svg";

@Component({
  selector: IconComponent.selector,
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  static selector = `${environment.prefix}-icon`;

  /**
   * The path of the `sprite.svg` containing all icons. The default is `assets/svg/sprite.svg`.
   */
  @Input() spritePath = spritePath;

  /**
   * The name of the icon to be rendered.
   */
  @Input() icon: IconName = "";

  /**
   * The color of the icon. The default is `primary`.
   */
  @Input() color: IconColor = "primary";
}
