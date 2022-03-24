import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

export type ButtonType = 'button' | 'submit';
export type ButtonAppearance = 'basic' | 'flat' | 'stroked';

@Component({
  tag: 'code-button',
  styleUrl: 'code-button.scss',
  shadow: true,
})
export class CodeButtonComponent {
  /**
   * The label text of the button.
   */
  @Prop() label? = '';

  /**
   * The type of the button (`button` | `submit`). The default is `button`.
   */
  @Prop() type?: ButtonType = 'button';

  /**
   * The appearance of the button (`basic` | `flat` | `stroked`). The default is `flat`.
   */
  @Prop() appearance?: ButtonAppearance = 'flat';

  /**
   * If `true`, the user cannot interact with the button.
   */
  @Prop() disabled? = false;

  /**
   * Emitted when the user click on the button.
   */
  @Event() buttonClick: EventEmitter<void>;

  /**
   * Handle the click event.
   */
  private _onClick = () => {
    this.buttonClick.emit();
  };

  render() {
    return (
      <button class={this.appearance} disabled={this.disabled} type={this.type} onClick={this._onClick}>
        {this.label}
      </button>
    );
  }
}
