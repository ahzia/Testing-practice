const reverseString = require('./reverseString');
test('Checking Reverse Functionality:', () => {
    //Arange
    const string = 'Ahmad'; 
    //Act
    const result = reverseString(string);
    //Assert
    expect(result).toBe('damhA');
  });