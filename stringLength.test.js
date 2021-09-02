const stringLength = require('./stringLength');

test('Throws error when length is not between 1 and 10:', () => {
    //Arange
    const string = 'Ahmadahmadahmad'; 
    //Act Assert
    expect(() => stringLength(string)).toThrow(Error);
  });

test('Checking String Length:', () => {
  //Arange
  const string = 'Ahmad'; 
  //Act
  const result = stringLength(string);
  //Assert
  expect(result).toBe(5);
});