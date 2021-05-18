import { addUrlParams } from './network.utils';

describe('addUrlParams', () => {
  const URL = 'http://reactjs.org';
  it('should not append the URL with any parameters', () => {
    const result = addUrlParams(URL);
    const expected = URL;

    expect(result).toBe(expected);
  });

  it('should append the URL with 1 parameter', () => {
    const result = addUrlParams(URL, { name: 'John' });
    const expected = `${URL}?name=John`;

    expect(result).toBe(expected);
  });

  it('should append the URL with 4 parameters', () => {
    const result = addUrlParams(URL, {
      name: 'John',
      age: 35,
      email: 'john@reactjs.org',
      message: 'Hello world',
    });
    const expected = `${URL}?name=John&age=35&email=john%40reactjs.org&message=Hello%20world`;

    expect(result).toBe(expected);
  });

  it('should append the URL with array values', () => {
    const result = addUrlParams(URL, {
      name: 'John',
      employment: ['employee', 'contractor', 'something else'],
    });
    const expected = `${URL}?name=John&employment=employee&employment=contractor&employment=something%20else`;

    expect(result).toBe(expected);
  });
});
