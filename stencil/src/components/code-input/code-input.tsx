import { Component, Event, EventEmitter, h, Host, Prop, State, Watch } from '@stencil/core';
import { IconName } from '../code-icon/code-icon';

export type InputType = 'text' | 'password';

const defaultSpritePath = 'assets/svg/sprite.svg';
const floatingLabelScale = 0.75;
const outlineGapPadding = 6;

@Component({
  tag: 'code-input',
  styleUrl: 'code-input.scss',
  shadow: true,
})
export class CodeInput {
  /**
   * The label text of the input.
   */
  @Prop() label? = '';

  /**
   * If `true`, the user cannot interact with the input.
   */
  @Prop() disabled?: boolean;

  /**
   * Instructional text that shows before the input has a value.
   */
  @Prop() placeholder? = '';

  @Watch('placeholder')
  protected placeholderChanged(value?: string) {
    if (this._hasFocus || !this.label) {
      this._placeholder = value || '';
    }
  }

  /**
   * The type of control to display. The default type is `text`.
   */
  @Prop() type?: InputType = 'text';

  @Watch('type')
  protected typeChanged(value?: InputType) {
    this._type = value || 'text';

    if (this._type === 'password') {
      this._isPassword = true;
      this._isMasked = true;
    }
  }

  /**
   * The value of the input.
   */
  @Prop({ mutable: true }) value? = '';

  /**
   * The flag defining the error state of the input.
   */
  @Prop() error? = false;

  /**
   * The message to show when the control is in the error state.
   */
  @Prop() errorMessage? = '';

  /**
   * The base path of the SVG sprite containing all the library icons.
   * The default is `assets/svg/sprite.svg`.
   */
  @Prop() spritePath? = defaultSpritePath;

  /**
   * Flag that defines if the input has the focus.
   */
  @State() private _hasFocus = false;

  /**
   * Flag that defines if the user hovers over the input.
   */
  @State() private _isOver = false;

  /**
   * If `true`, the input text is masked.
   */
  @State() private _isPassword = false;

  /**
   * Name of the password icon (`eye` | `eye-off`).
   */
  @State() private _passwordIcon: IconName = 'eye-off';

  /**
   * @see {@link type}
   */
  @State() private _type: InputType = 'text';

  /**
   * Emitted when the value has changed.
   */
  @Event() inputChange!: EventEmitter<InputEvent>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() inputBlur!: EventEmitter<FocusEvent>;

  /**
   * Emitted when the input has focus.
   */
  @Event() inputFocus!: EventEmitter<FocusEvent>;

  /**
   * Reference to `<div class="input-conatiner">` DOM element.
   */
  private _container?: HTMLDivElement;

  /**
   * Reference to `<label>` DOM element.
   */
  private _label?: HTMLLabelElement;

  /**
   * If `true`, the input text is masked.
   */
  private _isMasked = true;

  /**
   * @see {@link placeholder}
   */
  private _placeholder = ' ';

  /**
   * Returns the value of the input.
   */
  private _getValue(): string {
    return (this.value || '').toString();
  }

  /**
   * Check if the input has a value.
   */
  private _hasValue(): boolean {
    return this._getValue().length > 0;
  }

  /**
   * Handle input event.
   */
  private _onInput = (ev: InputEvent) => {
    const input = ev.target as HTMLInputElement | null;

    if (input) {
      this.value = input.value || '';
      this.inputChange.emit(ev);
    }
  };

  /**
   * Handle input blur event.
   * @param ev Focus event
   */
  private _onBlur = (ev: FocusEvent) => {
    this._hasFocus = false;
    this._placeholder = !this.label ? this.placeholder : '';

    this.inputBlur.emit(ev);
  };

  /**
   * Handle input focus event.
   * @param ev Focus event
   */
  private _onFocus = (ev: FocusEvent) => {
    this._hasFocus = true;
    this._placeholder = this.placeholder || '';

    this.inputFocus.emit(ev);
  };

  /**
   * Returns the type of the control based on `_isPassword` and `_show` flags.
   */
  private _getInputType(): InputType {
    if (this._isPassword) {
      return this._isMasked ? 'password' : 'text';
    }

    return this._type;
  }

  /**
   * Update the width and position of the gap in the outline.
   */
  private _updateOutlineGap() {
    const labelEl = this._label || null;
    const container = this._container || null;
    const outlineGapSelector = '.input-outline-gap';

    let gapWidth = 0;

    const gapEls = container.querySelectorAll<HTMLDivElement>(outlineGapSelector);

    if (this._label && labelEl) {
      const labelWidth = labelEl.offsetWidth;

      gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
    }

    for (let i = 0; i < gapEls.length; i++) {
      gapEls[i].style.width = `${gapWidth}px`;
    }
  }

  /**
   * Switch the visibility of the input text and the `_passwordIcon`.
   */
  private _togglePasswordVisibility() {
    if (this.disabled) {
      return;
    }

    this._isMasked = !this._isMasked;
    this._passwordIcon = this._isMasked ? 'eye-off' : 'eye';
  }

  componentDidLoad() {
    this._updateOutlineGap();
  }

  componentWillLoad() {
    this.typeChanged(this.type);
    this.placeholderChanged(this.placeholder);
  }

  render() {
    return (
      <Host>
        {/** input container */}
        <div
          class={{
            'input-container': true,
            'has-focus': this._hasFocus,
            'has-value': this._hasValue(),
            'has-error': this.error,
            'is-over': this._isOver,
            'disabled': this.disabled,
          }}
          ref={container => (this._container = container as HTMLDivElement)}
        >
          {/** outline */}
          <div class="input-outline">
            <div class="input-outline-start"></div>
            <div class="input-outline-gap"></div>
            <div class="input-outline-end"></div>
          </div>

          {/** outline thick */}
          <div class="input-outline thick">
            <div class="input-outline-start"></div>
            <div class="input-outline-gap"></div>
            <div class="input-outline-end"></div>
          </div>

          {/** infix */}
          <div class="input-infix">
            {/** input */}
            <input
              disabled={this.disabled}
              placeholder={this._placeholder || ''}
              type={this._getInputType()}
              value={this.value}
              onInput={this._onInput}
              onBlur={this._onBlur}
              onFocus={this._onFocus}
              onMouseOver={() => (this._isOver = true)}
              onMouseOut={() => (this._isOver = false)}
            />

            {/** label */}
            <label ref={label => (this._label = label as HTMLLabelElement)}>{this.label}</label>
          </div>

          {/** password icon */}
          {this._isPassword && (
            <div class="password-icon" onClick={() => this._togglePasswordVisibility()}>
              <svg>
                <use xlinkHref={`${this.spritePath}#code-${this._passwordIcon}`}></use>
              </svg>
            </div>
          )}
        </div>

        {/** error message */}
        <div
          class={{
            'error-message': true,
            'show': this.error && (this.errorMessage || '').length > 0,
          }}
        >
          {this.errorMessage}
        </div>
      </Host>
    );
  }
}
