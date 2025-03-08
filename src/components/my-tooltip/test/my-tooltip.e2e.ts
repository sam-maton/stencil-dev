import { newE2EPage } from '@stencil/core/testing';

describe('my-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-tooltip></my-tooltip>');

    const element = await page.find('my-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
