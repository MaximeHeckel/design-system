import { render } from '@testing-library/react';
import Callout from './Callout';

describe('Callout', () => {
  it('can render a Callout with variant info', () => {
    const { debug, container } = render(<Callout variant="info">Test</Callout>);
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(container.querySelector('title')).toHaveTextContent('Info');
  });

  it('can render a Callout with variant danger', () => {
    const { container } = render(<Callout variant="danger">Test</Callout>);
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(container.querySelector('title')).toHaveTextContent('Alert');
  });

  it('can render a Callout with variant info', () => {
    const { container, queryByText } = render(
      <Callout label="Test Label" variant="info">
        Test
      </Callout>
    );
    expect(container.querySelector('svg')).not.toBeInTheDocument();
    expect(queryByText('Test Label')).toBeInTheDocument();
  });

  it('can render a Callout with variant danger', () => {
    const { container, queryByText } = render(
      <Callout label="Test Label" variant="danger">
        Test
      </Callout>
    );
    expect(container.querySelector('svg')).not.toBeInTheDocument();
    expect(queryByText('Test Label')).toBeInTheDocument();
  });
});
