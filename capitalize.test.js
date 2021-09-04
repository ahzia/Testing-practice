const capitalize = require('./capitalize');
test('Checking Capitalize Functionality:', () => {
    //Arange
    const string = 'ahmad'; 
    //Act
    const result = capitalize(string);
    //Assert
    expect(result).toBe('Ahmad');
  });