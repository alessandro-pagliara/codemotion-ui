/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonAppearance, ButtonType } from "./components/code-button/code-button";
import { IconColor, IconName } from "./components/code-icon/code-icon";
import { InputType } from "./components/code-input/code-input";
export namespace Components {
    interface CodeButton {
        /**
          * The appearance of the button (`basic` | `flat` | `stroked`). The default is `flat`.
         */
        "appearance"?: ButtonAppearance;
        /**
          * If `true`, the user cannot interact with the button.
         */
        "disabled"?: boolean;
        /**
          * The label text of the button.
         */
        "label"?: string;
        /**
          * The type of the button (`button` | `submit`). The default is `button`.
         */
        "type"?: ButtonType;
    }
    interface CodeIcon {
        /**
          * The color of the icon. The default is `primary`.
         */
        "color"?: IconColor;
        /**
          * The name of the icon to be rendered.
         */
        "icon": IconName;
        /**
          * The path of the `sprite.svg` containing all icons. The default is `assets/svg/sprite.svg`.
         */
        "spritePath"?: string;
    }
    interface CodeInput {
        /**
          * If `true`, the user cannot interact with the input.
         */
        "disabled"?: boolean;
        /**
          * The flag defining the error state of the input.
         */
        "error"?: boolean;
        /**
          * The message to show when the control is in the error state.
         */
        "errorMessage"?: string;
        /**
          * The label text of the input.
         */
        "label"?: string;
        /**
          * Instructional text that shows before the input has a value.
         */
        "placeholder"?: string;
        /**
          * The base path of the SVG sprite containing all the library icons. The default is `assets/svg/sprite.svg`.
         */
        "spritePath"?: string;
        /**
          * The type of control to display. The default type is `text`.
         */
        "type"?: InputType;
        /**
          * The value of the input.
         */
        "value"?: string;
    }
    interface CodeLogo {
    }
}
declare global {
    interface HTMLCodeButtonElement extends Components.CodeButton, HTMLStencilElement {
    }
    var HTMLCodeButtonElement: {
        prototype: HTMLCodeButtonElement;
        new (): HTMLCodeButtonElement;
    };
    interface HTMLCodeIconElement extends Components.CodeIcon, HTMLStencilElement {
    }
    var HTMLCodeIconElement: {
        prototype: HTMLCodeIconElement;
        new (): HTMLCodeIconElement;
    };
    interface HTMLCodeInputElement extends Components.CodeInput, HTMLStencilElement {
    }
    var HTMLCodeInputElement: {
        prototype: HTMLCodeInputElement;
        new (): HTMLCodeInputElement;
    };
    interface HTMLCodeLogoElement extends Components.CodeLogo, HTMLStencilElement {
    }
    var HTMLCodeLogoElement: {
        prototype: HTMLCodeLogoElement;
        new (): HTMLCodeLogoElement;
    };
    interface HTMLElementTagNameMap {
        "code-button": HTMLCodeButtonElement;
        "code-icon": HTMLCodeIconElement;
        "code-input": HTMLCodeInputElement;
        "code-logo": HTMLCodeLogoElement;
    }
}
declare namespace LocalJSX {
    interface CodeButton {
        /**
          * The appearance of the button (`basic` | `flat` | `stroked`). The default is `flat`.
         */
        "appearance"?: ButtonAppearance;
        /**
          * If `true`, the user cannot interact with the button.
         */
        "disabled"?: boolean;
        /**
          * The label text of the button.
         */
        "label"?: string;
        /**
          * Emitted when the user click on the button.
         */
        "onButtonClick"?: (event: CustomEvent<void>) => void;
        /**
          * The type of the button (`button` | `submit`). The default is `button`.
         */
        "type"?: ButtonType;
    }
    interface CodeIcon {
        /**
          * The color of the icon. The default is `primary`.
         */
        "color"?: IconColor;
        /**
          * The name of the icon to be rendered.
         */
        "icon"?: IconName;
        /**
          * The path of the `sprite.svg` containing all icons. The default is `assets/svg/sprite.svg`.
         */
        "spritePath"?: string;
    }
    interface CodeInput {
        /**
          * If `true`, the user cannot interact with the input.
         */
        "disabled"?: boolean;
        /**
          * The flag defining the error state of the input.
         */
        "error"?: boolean;
        /**
          * The message to show when the control is in the error state.
         */
        "errorMessage"?: string;
        /**
          * The label text of the input.
         */
        "label"?: string;
        /**
          * Emitted when the input loses focus.
         */
        "onInputBlur"?: (event: CustomEvent<FocusEvent>) => void;
        /**
          * Emitted when the value has changed.
         */
        "onInputChange"?: (event: CustomEvent<InputEvent>) => void;
        /**
          * Emitted when the input has focus.
         */
        "onInputFocus"?: (event: CustomEvent<FocusEvent>) => void;
        /**
          * Instructional text that shows before the input has a value.
         */
        "placeholder"?: string;
        /**
          * The base path of the SVG sprite containing all the library icons. The default is `assets/svg/sprite.svg`.
         */
        "spritePath"?: string;
        /**
          * The type of control to display. The default type is `text`.
         */
        "type"?: InputType;
        /**
          * The value of the input.
         */
        "value"?: string;
    }
    interface CodeLogo {
    }
    interface IntrinsicElements {
        "code-button": CodeButton;
        "code-icon": CodeIcon;
        "code-input": CodeInput;
        "code-logo": CodeLogo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "code-button": LocalJSX.CodeButton & JSXBase.HTMLAttributes<HTMLCodeButtonElement>;
            "code-icon": LocalJSX.CodeIcon & JSXBase.HTMLAttributes<HTMLCodeIconElement>;
            "code-input": LocalJSX.CodeInput & JSXBase.HTMLAttributes<HTMLCodeInputElement>;
            "code-logo": LocalJSX.CodeLogo & JSXBase.HTMLAttributes<HTMLCodeLogoElement>;
        }
    }
}
