import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('renders correctly', () => {
    render(
      <Checkbox label="Click me!" value="clickMe" selected onChange={() => {}}>
        Hello
      </Checkbox>
    );

    const label = screen.getByText('Click me!');

    expect(label).toBeInTheDocument();
  });

  it('sets the state to selected', () => {
    const handleClick = jest.fn();
    render(
      <Checkbox label="Click me!" value="clickMe" selected={false} onChange={handleClick}>
        Hello
      </Checkbox>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledWith(true);
  });

  it('sets the state to deselected', () => {
    const handleClick = jest.fn();
    render(
      <Checkbox label="Click me!" value="clickMe" selected onChange={handleClick}>
        Hello
      </Checkbox>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledWith(false);
  });
});
