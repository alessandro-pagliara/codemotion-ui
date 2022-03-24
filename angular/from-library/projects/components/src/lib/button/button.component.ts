import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { prefix } from '../common';

type ButtonType = 'button' | 'submit';
type ButtonAppearance = 'basic' | 'flat' | 'stroked';

@Component({
  selector: ButtonComponent.selector,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  static selector = `${prefix}-button`;

  /**
   * The label text of the button.
   */
  @Input() label? = '';

  /**
   * The type of the button (`button` | `submit`). The default is `button`.
   */
  @Input() type?: ButtonType = 'button';

  /**
   * The appearance of the button (`basic` | `flat` | `stroked`). The default is `flat`.
   */
  @Input() appearance?: ButtonAppearance = 'flat';

  /**
   * If `true`, the user cannot interact with the button.
   */
  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }

  /**
   * @see {@link disabled}
   */
  private _disabled = false;

  /**
   * Emitted when the user click on the button.
   */
  @Output() buttonClick: EventEmitter<void> = new EventEmitter();

  /**
   * Handle the click event.
   */
  onClick() {
    this.buttonClick.emit();
  }
}
