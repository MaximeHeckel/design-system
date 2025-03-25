import { render } from '@testing-library/react';
import Callout from './Callout';

describe('Callout', () => {
  it('can render a Callout with variant info', () => {
    const { getByTestId } = render(<Callout variant="info">Test</Callout>);
    expect(getByTestId('callout-icon-info')).toBeInTheDocument();
  });

  it('can render a Callout with variant danger', () => {
    const { getByTestId } = render(<Callout variant="danger">Test</Callout>);
    expect(getByTestId('callout-icon-danger')).toBeInTheDocument();
  });

  it('can render a Callout with variant info', () => {
    const { getByTestId } = render(
      <Callout label="Test Label" variant="info">
        Test
      </Callout>
    );
    expect(getByTestId('callout-label-info')).toBeInTheDocument();
    expect(getByTestId('callout-label-info')).toHaveTextContent('Test Label');
  });

  it('can render a Callout with variant danger', () => {
    const { getByTestId } = render(
      <Callout label="Test Label" variant="danger">
        Test
      </Callout>
    );

    expect(getByTestId('callout-label-danger')).toBeInTheDocument();
    expect(getByTestId('callout-label-danger')).toHaveTextContent('Test Label');
  });
});
