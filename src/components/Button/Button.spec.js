import '@testing-library/jest-dom/extend-expect';
import Button from './Button.svelte';
import { render, fireEvent, wait } from '@testing-library/svelte';

describe('button', () => {
  it('renders correctly', async () => {
    expect.hasAssertions();

    const { container } = render(Button, { props: { count: 0 } });
    const btn = container.querySelector('button');

    expect(btn.innerHTML).toBe('Clicked 0 times');

    fireEvent.click(btn);

    await wait(() => expect(btn.innerHTML).toBe('Clicked 1 times'));
  });
});
