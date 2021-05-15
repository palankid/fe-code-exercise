import { render, screen, fireEvent } from '@testing-library/react';
import RadioGroup from './RadioGroup';

describe('Checkbox', () => {
  const options = [
    { label: 'First', description: 'The first description', value: 'first' },
    { label: 'Second', description: 'The second description', value: 'second' },
    { label: 'Third', description: 'The third description', value: 'third' },
  ];

  it('renders correctly', () => {
    render(
      <RadioGroup
        options={options}
        selectedValue=""
        onChange={() => {}}
      />
    );

    const elements = screen.getAllByRole('button');

    expect(elements).toHaveLength(3);
  });

  it('selects the second then the third RadioButton', () => {
    const handleChange = jest.fn();
    render(
      <RadioGroup
        options={options}
        selectedValue=""
        onChange={handleChange}
      />
    );

    const elements = screen.getAllByRole('button');

    fireEvent.click(elements[1]);

    expect(handleChange).toHaveBeenCalledWith('second');

    fireEvent.click(elements[2]);

    expect(handleChange).toHaveBeenCalledWith('third');
  });
});
