import '@testing-library/jest-dom/extend-expect';
import App from './App.svelte';
import { render, wait } from '@testing-library/svelte';

describe('render', () => {
  it('programmatically change props', async () => {
    expect.hasAssertions();

    const { component, getByText } = render(App, { props: { name: 'world' } });

    expect(getByText('Hello world!')).toBeInTheDocument();

    component.$set({ name: 'foo' });

    await wait(() => expect(getByText('Hello foo!')).toBeInTheDocument());
  });

  it('renders correctly', () => {
    const { container } = render(App, { props: { name: 'world' } });
    const title = container.querySelector('h1').innerHTML;

    expect(title).toBe('Hello world!');
    expect(container).toMatchInlineSnapshot(`
      <body>
        <div>
          <h1
            class="svelte-12gyg4y"
          >
            Hello 
            world
            !
          </h1>
        </div>
      </body>
    `);
  });
});
