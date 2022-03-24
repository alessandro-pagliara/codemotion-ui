import { Component, h, Prop } from '@stencil/core';

export type IconName = 'eye' | 'eye-off' | 'lock-closed' | '';
export type IconColor = 'primary' | 'secondary';

const spritePath = 'assets/svg/sprite.svg';

@Component({
  tag: 'code-icon',
  styleUrl: 'code-icon.scss',
  shadow: true,
})
export class CodeIcon {
  /**
   * The path of the `sprite.svg` containing all icons. The default is `assets/svg/sprite.svg`.
   */
  @Prop() spritePath? = spritePath;

  /**
   * The name of the icon to be rendered.
   */
  @Prop() icon: IconName;

  /**
   * The color of the icon. The default is `primary`.
   */
  @Prop() color?: IconColor = 'primary';

  render() {
    return (
      <svg>
        <use xlinkHref={`${this.spritePath}#code-${this.icon}`} class={`stroke-${this.color}`}></use>
      </svg>
    );
  }
}
