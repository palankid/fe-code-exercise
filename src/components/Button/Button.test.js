import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Hello</Button>);

    const button = screen.getByRole('button');

    expect(button.getAttribute('type')).toBe('button');
    expect(button).toHaveTextContent('Hello');
  });

  it('spreads custom attributes', () => {
    const clickFn = jest.fn();
    render(
      <Button data-foo="12" onClick={clickFn}>
        Hello
      </Button>
    );

    const button = screen.getByRole('button');

    expect(button.getAttribute('data-foo')).toBe('12');

    fireEvent.click(button);
    expect(clickFn).toHaveBeenCalledTimes(1);
  });

  it('should not be clickable while loading state is on', () => {
    const clickFn = jest.fn();
    render(
      <Button data-foo="12" onClick={clickFn} progress>
        Hello
      </Button>
    );

    const button = screen.getByTestId('progressIcon');

    fireEvent.click(button);
    
    expect(button).toBeInTheDocument();
    expect(clickFn).toHaveBeenCalledTimes(0);
  });
});
