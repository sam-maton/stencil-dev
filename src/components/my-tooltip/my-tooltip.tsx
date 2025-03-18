import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'my-tooltip',
  styleUrl: 'my-tooltip.css',
  shadow: true,
})
export class MyTooltip {
  @Prop() text = '';
  @Prop() open = false;

  @Element() el: HTMLElement;

  private tooltipPosition = {
    top: '0',
    left: '0',
  };

  private handleMouseEnter = () => {
    this.open = true;
  };

  private handleMouseLeave = () => {
    this.open = false;
  };

  connectedCallback() {
    console.log(this.el);
  }

  render() {
    return (
      <Host onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <span>
          <slot></slot>
        </span>
        {this.open && (
          <div
            style={{
              top: this.tooltipPosition.top,
              left: this.tooltipPosition.left,
            }}
            class={'tooltip-content'}
          >
            {this.text}
          </div>
        )}
      </Host>
    );
  }
}
