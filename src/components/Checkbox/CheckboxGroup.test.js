import { render, screen, fireEvent } from '@testing-library/react';
import CheckboxGroup from './CheckboxGroup';

describe('Checkbox', () => {
  const options = [
    { label: 'First', value: 'first' },
    { label: 'Second', value: 'second' },
    { label: 'Third', value: 'third' },
  ];

  it('renders correctly', () => {
    render(
      <CheckboxGroup
        options={options}
        selectedValues={[]}
        onChange={() => {}}
      />
    );

    const elements = screen.getAllByRole('button');

    expect(elements).toHaveLength(3);
  });

  it('selects the second and third checkboxes', () => {
    const handleChange = jest.fn();
    render(
      <CheckboxGroup
        options={options}
        selectedValues={[]}
        onChange={handleChange}
      />
    );

    const elements = screen.getAllByRole('button');

    fireEvent.click(elements[1]);
    fireEvent.click(elements[2]);

    expect(handleChange).toHaveBeenCalledTimes(2);
    expect(handleChange).toHaveBeenCalledWith(['second', 'third']);
  });
});
