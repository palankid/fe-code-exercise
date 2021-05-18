import { render, screen, fireEvent } from '@testing-library/react';
import Alert from './Alert';

describe('Alert', () => {
  it('renders correctly', () => {
    render(<Alert message="Hello" onClick={() => {}} visible />);

    const textElement = screen.getByText('Hello');

    expect(textElement).toBeInTheDocument();
  });

  it("does not render the element when it's invisible", () => {
    render(<Alert message="Hello" onClick={() => {}} visible={false} />);

    const textElement = screen.queryByText('Hello');

    expect(textElement).not.toBeInTheDocument();
  });

  it('should hide the component if the close button was clicked', () => {
    const handleClick = jest.fn();
    render(<Alert message="Hello" onClick={handleClick} visible />);

    let textElement = screen.queryByText('Hello');
    const button = screen.getByRole('button');

    expect(textElement).toBeInTheDocument();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);

    textElement = screen.queryByText('Hello');

    expect(textElement).not.toBeInTheDocument();
  });
});
