import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-tooltip',
  styleUrl: 'my-tooltip.css',
  shadow: true,
})
export class MyTooltip {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
