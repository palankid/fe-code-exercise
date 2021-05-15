import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('RadioButton', () => {
  it('renders correctly', () => {
    render(
      <RadioButton
        label="Click me!"
        value="clickMe"
        description="Description"
        selected
        onChange={() => {}}
      >
        Hello
      </RadioButton>
    );

    const label = screen.getByText('Click me!');
    const description = screen.getByText('Description');

    expect(label).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('sets the state to selected', () => {
    const handleClick = jest.fn();
    render(
      <RadioButton
        label="Click me!"
        value="clickMe"
        description="Description"
        selected={false}
        onChange={handleClick}
      >
        Hello
      </RadioButton>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledWith(true);
  });

  it('does not allow to deselect an already selected RadioButton', () => {
    const handleClick = jest.fn();
    render(
      <RadioButton
        label="Click me!"
        value="clickMe"
        description="Description"
        selected
        onChange={handleClick}
      >
        Hello
      </RadioButton>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
