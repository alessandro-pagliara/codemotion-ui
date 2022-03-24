# code-input



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                               | Type                   | Default             |
| -------------- | --------------- | --------------------------------------------------------------------------------------------------------- | ---------------------- | ------------------- |
| `disabled`     | `disabled`      | If `true`, the user cannot interact with the input.                                                       | `boolean`              | `undefined`         |
| `error`        | `error`         | The flag defining the error state of the input.                                                           | `boolean`              | `false`             |
| `errorMessage` | `error-message` | The message to show when the control is in the error state.                                               | `string`               | `''`                |
| `label`        | `label`         | The label text of the input.                                                                              | `string`               | `''`                |
| `placeholder`  | `placeholder`   | Instructional text that shows before the input has a value.                                               | `string`               | `''`                |
| `spritePath`   | `sprite-path`   | The base path of the SVG sprite containing all the library icons. The default is `assets/svg/sprite.svg`. | `string`               | `defaultSpritePath` |
| `type`         | `type`          | The type of control to display. The default type is `text`.                                               | `"password" \| "text"` | `'text'`            |
| `value`        | `value`         | The value of the input.                                                                                   | `string`               | `''`                |


## Events

| Event         | Description                         | Type                      |
| ------------- | ----------------------------------- | ------------------------- |
| `inputBlur`   | Emitted when the input loses focus. | `CustomEvent<FocusEvent>` |
| `inputChange` | Emitted when the value has changed. | `CustomEvent<InputEvent>` |
| `inputFocus`  | Emitted when the input has focus.   | `CustomEvent<FocusEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
