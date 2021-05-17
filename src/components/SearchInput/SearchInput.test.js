import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
  it('renders correctly', () => {

    render(<SearchInput value="Initial value" placeholder="Placeholder" onChange={() => {}} />);

    const input = screen.getByRole('input');

    expect(input.placeholder).toBe('Placeholder')
    expect(input.value).toBe('Initial value')
  });

  it('fires change event', () => {
    const handleChange = jest.fn();
    render(<SearchInput value="" placeholder="Placeholder" onChange={handleChange} />);

    const input = screen.getByRole('input');
    fireEvent.change(input, { target: { value: 'Hello world' } });

    expect(handleChange).toHaveBeenCalledWith('Hello world');
  });
});
