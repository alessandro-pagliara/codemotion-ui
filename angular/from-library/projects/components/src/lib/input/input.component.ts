import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  AfterContentChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { prefix } from '../common';
import { IconName } from '../icon/icon.component';

type InputType = 'text' | 'password';

const defaultSpritePath = 'assets/svg/sprite.svg';
const floatingLabelScale = 0.75;
const outlineGapPadding = 6;

@Component({
  selector: InputComponent.selector,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements AfterContentChecked, AfterViewInit {
  static selector = `${prefix}-input`;

  /**
   * The label text of the input.
   */
  @Input() label? = '';

  /**
   * If `true`, the user cannot interact with the input.
   */
  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }

  private _disabled = false;

  /**
   * Instructional text that shows before the input has a value.
   */
  @Input() placeholder? = '';

  /**
   * @see {@link placeholder}
   * @internal
   */
  _placeholder? = '';

  /**
   * The flag defining the error state of the input.
   */
  @Input()
  get error() {
    return this._error;
  }
  set error(value: BooleanInput) {
    this._error = coerceBooleanProperty(value);
  }

  private _error = false;

  /**
   * The message to show on error state
   */
  @Input() errorMessage? = '';

  /**
   * The type of control to display. The default type is `text`.
   */
  @Input()
  get type() {
    return this._type;
  }
  set type(value: InputType | undefined) {
    this._type = value || 'text';

    if (this._type === 'password') {
      this.isPassword = true;
      this._isMasked = true;
    }
  }

  private _type: InputType = 'text';

  /**
   * The value of the input.
   */
  @Input() value = '';

  /**
   * The base path of the SVG sprite containing all the library icons.
   * The default is `assets/svg/sprite.svg`.
   */
  @Input() spritePath = defaultSpritePath;

  /**
   * Emitted when the value has changed.
   */
  @Output() inputChange: EventEmitter<any> = new EventEmitter();

  /**
   * Emitted when the input loses focus.
   */
  @Output() inputBlur: EventEmitter<FocusEvent> = new EventEmitter();

  /**
   * Emitted when the input has focus.
   */
  @Output() inputFocus: EventEmitter<FocusEvent> = new EventEmitter();

  /**
   * Reference to `<div class="input-conatiner">` DOM element.
   */
  @ViewChild('containerRef', { static: true }) private _container: ElementRef | undefined;

  /**
   * Reference to `<label>` DOM element.
   */
  @ViewChild('labelRef') private _label: ElementRef<HTMLElement> | undefined;

  /**
   * Flag that defines if the input has the focus.
   */
  hasFocus = false;

  /**
   * Flag that defines if the user hovers over the input.
   */
  isOver = false;

  /**
   * If `true`, the input text is masked.
   */
  isPassword = false;

  /**
   * Name of the password icon (`eye` | `eye-off`).
   */
  passwordIcon: IconName = 'eye-off';

  /**
   * If `true`, the input text is masked.
   */
  private _isMasked = true;

  constructor(private readonly _changeDetectorRef: ChangeDetectorRef) {}

  /**
   * Returns the value of the input.
   */
  private _getValue(): string {
    return (this.value || '').toString();
  }

  /**
   * Check if the input has a value.
   */
  hasValue(): boolean {
    return this._getValue().length > 0;
  }

  /**
   * Handle input event.
   */
  onInput = (ev: InputEvent) => {
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
  onBlur = (ev: FocusEvent) => {
    this.hasFocus = false;
    this._placeholder = !this.label ? this.placeholder : '';

    this._changeDetectorRef.detectChanges();

    this.inputBlur.emit(ev);
  };

  /**
   * Handle input focus event.
   * @param ev Focus event
   */
  onFocus = (ev: FocusEvent) => {
    this.hasFocus = true;
    this._placeholder = this.placeholder || '';

    this._changeDetectorRef.detectChanges();

    this.inputFocus.emit(ev);
  };

  /**
   * Handle mouseover event.
   */
  onMouseOver() {
    this.isOver = true;
    this._changeDetectorRef.detectChanges();
  }

  /**
   * Handle mouseout event.
   */
  onMouseOut() {
    this.isOver = false;
    this._changeDetectorRef.detectChanges();
  }

  /**
   * Returns the type of the control based on `_isPassword` and `_show` flags.
   */
  getInputType(): InputType {
    if (this.isPassword) {
      return this._isMasked ? 'password' : 'text';
    }

    return this._type;
  }

  /**
   * Update the width and position of the gap in the outline.
   */
  private _updateOutlineGap() {
    const labelEl = this._label ? this._label.nativeElement : null;
    const container = this._container ? this._container.nativeElement : null;
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
  togglePasswordVisibility() {
    if (this.disabled) {
      return;
    }

    this._isMasked = !this._isMasked;
    this.passwordIcon = this._isMasked ? 'eye-off' : 'eye';

    this._changeDetectorRef.detectChanges();
  }

  ngAfterContentChecked() {
    this._updateOutlineGap();
  }

  ngAfterViewInit() {
    this._changeDetectorRef.detectChanges();
  }
}
