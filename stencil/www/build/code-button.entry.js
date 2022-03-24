import { r as registerInstance, e as createEvent, h } from './index-8d417401.js';

const codeButtonCss = "[type=password],[type=text]{--tw-shadow:0 0 #0000;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-radius:0;border-width:1px;font-size:1rem;line-height:1.5rem;padding:.5rem .75rem}[type=password]:focus,[type=text]:focus{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);border-color:#2563eb;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid transparent;outline-offset:2px}input::-moz-placeholder{color:#6b7280;opacity:1}input:-ms-input-placeholder{color:#6b7280;opacity:1}input::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}::-webkit-datetime-edit,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-meridiem-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-year-field{padding-bottom:0;padding-top:0}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }:host{display:block;height:3rem}button[type]{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(255 92 48/var(--tw-bg-opacity));border-radius:.625rem;border-width:0;color:rgb(255 255 255/var(--tw-text-opacity));cursor:pointer;font-family:Proxima Nova;font-size:1rem;font-weight:700;height:100%;line-height:1.5rem;padding:.5rem;transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);width:100%}button[type]:disabled{--tw-bg-opacity:1;background-color:hsl(18 100% 92.9%/var(--tw-bg-opacity));cursor:default;pointer-events:none}button[type]:hover{--tw-bg-opacity:1;background-color:hsl(10.8 91.9% 49.3%/var(--tw-bg-opacity))}button[type]:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);--tw-ring-color:rgb(255 92 48/var(--tw-ring-opacity));--tw-ring-opacity:0.5;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);outline:2px solid transparent;outline-offset:2px}button[type].basic{--tw-text-opacity:1;background-color:transparent;border-width:0;color:rgb(255 92 48/var(--tw-text-opacity))}button[type].basic:hover{--tw-bg-opacity:1;background-color:hsl(18 100% 92.9%/var(--tw-bg-opacity))}button[type].basic:disabled{--tw-text-opacity:1;color:hsl(18 100% 92.9%/var(--tw-text-opacity))}button[type].stroked{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-color:rgb(255 92 48/var(--tw-border-opacity));border-style:solid;border-width:2px;color:rgb(255 92 48/var(--tw-text-opacity))}button[type].stroked:hover{--tw-bg-opacity:1;background-color:hsl(18 100% 92.9%/var(--tw-bg-opacity))}button[type].stroked:disabled{--tw-border-opacity:1;--tw-text-opacity:1;border-color:hsl(18 100% 92.9%/var(--tw-border-opacity));color:hsl(18 100% 92.9%/var(--tw-text-opacity))}";

const CodeButtonComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.buttonClick = createEvent(this, "buttonClick", 7);
    /**
     * The label text of the button.
     */
    this.label = '';
    /**
     * The type of the button (`button` | `submit`). The default is `button`.
     */
    this.type = 'button';
    /**
     * The appearance of the button (`basic` | `flat` | `stroked`). The default is `flat`.
     */
    this.appearance = 'flat';
    /**
     * If `true`, the user cannot interact with the button.
     */
    this.disabled = false;
    /**
     * Handle the click event.
     */
    this._onClick = () => {
      this.buttonClick.emit();
    };
  }
  render() {
    return (h("button", { class: this.appearance, disabled: this.disabled, type: this.type, onClick: this._onClick }, this.label));
  }
};
CodeButtonComponent.style = codeButtonCss;

export { CodeButtonComponent as code_button };
