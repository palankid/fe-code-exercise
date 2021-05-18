import { debounce } from './functions.utils';

describe('Functions Utils', () => {
  it('should not call the debounced function immediately', () => {
    const spyFn = jest.fn();
    const debouncedFn = debounce(spyFn, 1000);
    debouncedFn();

    expect(spyFn).not.toHaveBeenCalled();
  });

  it('should call the debounced function after 1000ms of inactivity', () => {
    jest.useFakeTimers();
    const originalFn = jest.fn();
    const debouncedFn = debounce(originalFn, 1000);

    debouncedFn();

    expect(originalFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);

    expect(originalFn).toHaveBeenCalled();

    jest.useRealTimers();
  });
});
