import { newSpecPage } from '@stencil/core/testing';
import { MyTooltip } from '../my-tooltip';

describe('my-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyTooltip],
      html: `<my-tooltip></my-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <my-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-tooltip>
    `);
  });
});
