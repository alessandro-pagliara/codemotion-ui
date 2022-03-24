import { r as registerInstance, e as createEvent, h, f as Host } from './index-8d417401.js';

const codeInputCss = "[type=password],[type=text]{--tw-shadow:0 0 #0000;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-radius:0;border-width:1px;font-size:1rem;line-height:1.5rem;padding:.5rem .75rem}[type=password]:focus,[type=text]:focus{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);border-color:#2563eb;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid transparent;outline-offset:2px}input::-moz-placeholder{color:#6b7280;opacity:1}input:-ms-input-placeholder{color:#6b7280;opacity:1}input::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}::-webkit-datetime-edit,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-meridiem-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-year-field{padding-bottom:0;padding-top:0}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }:host{display:block;position:relative;width:100%}.input-container{align-items:center;border-radius:.625rem;display:flex;height:3rem;position:relative;width:100%}.input-container.is-over:not(.has-error) .input-outline.thick div{--tw-border-opacity:1;border-color:rgb(14 30 48/var(--tw-border-opacity))}.input-container.is-over:not(.has-error) label,.input-container.is-over:not(.has-error) use{--tw-text-opacity:1;color:rgb(14 30 48/var(--tw-text-opacity))}.input-container.has-focus:not(.has-error) .input-outline.thick div{--tw-border-opacity:1;border-color:rgb(255 92 48/var(--tw-border-opacity))}.input-container.has-focus:not(.has-error) label,.input-container.has-focus:not(.has-error) use{--tw-text-opacity:1;color:rgb(255 92 48/var(--tw-text-opacity))}.input-container.has-focus .input-outline,.input-container.is-over .input-outline{opacity:0}.input-container.has-focus .input-outline.thick,.input-container.is-over .input-outline.thick{opacity:1}.input-container.has-focus div.input-outline-gap,.input-container.has-value div.input-outline-gap{border-top-color:transparent!important}.input-container.has-focus label,.input-container.has-value label{--tw-translate-y:-1.5rem;--tw-scale-x:.75;--tw-scale-y:.75;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.input-container.has-error label{--tw-text-opacity:1;color:rgb(255 23 68/var(--tw-text-opacity))}.input-container.has-error .input-outline div{--tw-border-opacity:1;border-color:rgb(255 23 68/var(--tw-border-opacity))}.input-container.disabled{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.input-container.disabled .password-icon,.input-outline{pointer-events:none}.input-outline{bottom:0;display:flex;left:0;position:absolute;right:0;top:0;transition-duration:.15s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.input-outline.thick{opacity:0}.input-outline.thick div{border-width:2px}.input-outline div{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity));border-style:solid;border-width:1px;box-sizing:border-box}.input-outline div.input-outline-start{border-bottom-left-radius:.625rem!important;border-right-width:0!important;border-top-left-radius:.625rem!important;width:.5rem}.input-outline div.input-outline-gap{border-left-width:0!important;border-right-width:0!important}.input-outline div.input-outline-end{border-bottom-right-radius:.625rem!important;border-left-width:0!important;border-top-right-radius:.625rem!important;flex-grow:1}.input-infix{display:flex;flex-grow:1;height:100%}label{color:rgb(156 163 175/var(--tw-text-opacity));margin-left:.75rem;pointer-events:none;position:absolute;top:.75rem;transform-origin:left;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}input[type],label{--tw-text-opacity:1;font-family:Proxima Nova}input[type]{background-color:transparent;border-width:0;color:rgb(14 30 48/var(--tw-text-opacity));width:100%}input[type]::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(156 163 175/var(--tw-placeholder-opacity))}input[type]:-ms-input-placeholder{--tw-placeholder-opacity:1;color:rgb(156 163 175/var(--tw-placeholder-opacity))}input[type]::placeholder{--tw-placeholder-opacity:1;color:rgb(156 163 175/var(--tw-placeholder-opacity))}input[type]:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);bottom:0;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);outline-width:0}.password-icon{align-items:center;bottom:0;cursor:pointer;display:flex;height:100%;padding-left:.5rem;padding-right:.5rem;right:0;top:0;width:1.5rem}.password-icon:hover use{--tw-text-opacity:1;color:rgb(14 30 48/var(--tw-text-opacity))}.password-icon svg{height:100%}.password-icon use{--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity));transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1)}.error-message{--tw-text-opacity:1;color:rgb(255 23 68/var(--tw-text-opacity));font-family:Proxima Nova;font-size:.75rem;line-height:1rem;margin-left:.75rem;margin-top:.25rem;max-height:0;opacity:0;transition-duration:.5s;transition-property:max-height,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.error-message.show{max-height:3rem;opacity:1}";

const defaultSpritePath = 'assets/svg/sprite.svg';
const floatingLabelScale = 0.75;
const outlineGapPadding = 6;
const CodeInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inputChange = createEvent(this, "inputChange", 7);
    this.inputBlur = createEvent(this, "inputBlur", 7);
    this.inputFocus = createEvent(this, "inputFocus", 7);
    /**
     * The label text of the input.
     */
    this.label = '';
    /**
     * Instructional text that shows before the input has a value.
     */
    this.placeholder = '';
    /**
     * The type of control to display. The default type is `text`.
     */
    this.type = 'text';
    /**
     * The value of the input.
     */
    this.value = '';
    /**
     * The flag defining the error state of the input.
     */
    this.error = false;
    /**
     * The message to show when the control is in the error state.
     */
    this.errorMessage = '';
    /**
     * The base path of the SVG sprite containing all the library icons.
     * The default is `assets/svg/sprite.svg`.
     */
    this.spritePath = defaultSpritePath;
    /**
     * Flag that defines if the input has the focus.
     */
    this._hasFocus = false;
    /**
     * Flag that defines if the user hovers over the input.
     */
    this._isOver = false;
    /**
     * If `true`, the input text is masked.
     */
    this._isPassword = false;
    /**
     * Name of the password icon (`eye` | `eye-off`).
     */
    this._passwordIcon = 'eye-off';
    /**
     * @see {@link type}
     */
    this._type = 'text';
    /**
     * If `true`, the input text is masked.
     */
    this._isMasked = true;
    /**
     * @see {@link placeholder}
     */
    this._placeholder = ' ';
    /**
     * Handle input event.
     */
    this._onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
        this.inputChange.emit(ev);
      }
    };
    /**
     * Handle input blur event.
     * @param ev Focus event
     */
    this._onBlur = (ev) => {
      this._hasFocus = false;
      this._placeholder = !this.label ? this.placeholder : '';
      this.inputBlur.emit(ev);
    };
    /**
     * Handle input focus event.
     * @param ev Focus event
     */
    this._onFocus = (ev) => {
      this._hasFocus = true;
      this._placeholder = this.placeholder || '';
      this.inputFocus.emit(ev);
    };
  }
  placeholderChanged(value) {
    if (this._hasFocus || !this.label) {
      this._placeholder = value || '';
    }
  }
  typeChanged(value) {
    this._type = value || 'text';
    if (this._type === 'password') {
      this._isPassword = true;
      this._isMasked = true;
    }
  }
  /**
   * Returns the value of the input.
   */
  _getValue() {
    return (this.value || '').toString();
  }
  /**
   * Check if the input has a value.
   */
  _hasValue() {
    return this._getValue().length > 0;
  }
  /**
   * Returns the type of the control based on `_isPassword` and `_show` flags.
   */
  _getInputType() {
    if (this._isPassword) {
      return this._isMasked ? 'password' : 'text';
    }
    return this._type;
  }
  /**
   * Update the width and position of the gap in the outline.
   */
  _updateOutlineGap() {
    const labelEl = this._label || null;
    const container = this._container || null;
    const outlineGapSelector = '.input-outline-gap';
    let gapWidth = 0;
    const gapEls = container.querySelectorAll(outlineGapSelector);
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
  _togglePasswordVisibility() {
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
    return (h(Host, null, h("div", { class: {
        'input-container': true,
        'has-focus': this._hasFocus,
        'has-value': this._hasValue(),
        'has-error': this.error,
        'is-over': this._isOver,
        'disabled': this.disabled,
      }, ref: container => (this._container = container) }, h("div", { class: "input-outline" }, h("div", { class: "input-outline-start" }), h("div", { class: "input-outline-gap" }), h("div", { class: "input-outline-end" })), h("div", { class: "input-outline thick" }, h("div", { class: "input-outline-start" }), h("div", { class: "input-outline-gap" }), h("div", { class: "input-outline-end" })), h("div", { class: "input-infix" }, h("input", { disabled: this.disabled, placeholder: this._placeholder || '', type: this._getInputType(), value: this.value, onInput: this._onInput, onBlur: this._onBlur, onFocus: this._onFocus, onMouseOver: () => (this._isOver = true), onMouseOut: () => (this._isOver = false) }), h("label", { ref: label => (this._label = label) }, this.label)), this._isPassword && (h("div", { class: "password-icon", onClick: () => this._togglePasswordVisibility() }, h("svg", null, h("use", { xlinkHref: `${this.spritePath}#code-${this._passwordIcon}` }))))), h("div", { class: {
        'error-message': true,
        'show': this.error && (this.errorMessage || '').length > 0,
      } }, this.errorMessage)));
  }
  static get watchers() { return {
    "placeholder": ["placeholderChanged"],
    "type": ["typeChanged"]
  }; }
};
CodeInput.style = codeInputCss;

export { CodeInput as code_input };
