import Card from './Card';
import { CardHeader } from './Card.styles';
import { isHeaderElement } from './utils';

describe('Card - utils', () => {
  it('isHeaderElement', () => {
    const Component1 = <CardHeader />;
    const Component2 = (
      <Card>
        <div />
      </Card>
    );

    expect(isHeaderElement(Component1)).toBeTruthy();
    expect(isHeaderElement(Component2)).toBeFalsy();
  });
});
