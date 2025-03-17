import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-tooltip',
  styleUrl: 'my-tooltip.css',
  shadow: true,
})
export class MyTooltip {
  @Prop() text = '';
  @Prop() open = false;

  private handleMouseEnter = () => {
    this.open = true;
  };

  private handleMouseLeave = () => {
    this.open = false;
  };

  render() {
    return (
      <Host onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <slot></slot>
        {this.open && <div>{this.text}</div>}
      </Host>
    );
  }
}
