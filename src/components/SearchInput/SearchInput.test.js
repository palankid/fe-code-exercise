import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
  it('renders correctly and accepts input events', () => {
    render(<SearchInput placeholder="Placeholder" />);

    const input = screen.getByRole('input');
    fireEvent.change(input, { target: { value: 'Hello world' } });

    expect(input.placeholder).toBe('Placeholder')
    expect(input.value).toBe('Hello world')
  });
});
