const Calculator = require("./calculator");
cal= new Calculator();
let a;
let b;
let output;
describe('adding tow numbers', () => {
    test('Check If the function return the correct value:', () => {
      // Arrange
      a = 10;
      b = 20;
      // Act
      output = cal.add(a, b);
      // Assert
      expect(output).toBe(30);
    });
    test('Check If the function return the correct value when one opf values is negative:', () => {
        // Arrange
        a = 10;
        b = -20;
        // Act
        output = cal.add(a, b);
        // Assert
        expect(output).toBe(-10);
      });
    test('Throw Error If first number is String', () => {
        // Arrange
        a = 'string';
        b = 20;
        // Assert
        expect(() => cal.add(a,b).toThrow(Error));
      });
    test('Throw Error If Second number is String', () => {
        // Arrange
        a = 10;
        b = 'string';
        // Assert
        expect(() => cal.add(a,b).toThrow(Error));
      });
    test('Throw Error If both numbers are String', () => {
        // Arrange
        a = 'string';
        b = 'string';
        // Assert
        expect(() => cal.add(a,b).toThrow(Error));
      });
  });
describe('Subtruting tow numbers', () => {
  test('Check If the function return the correct value:', () => {
    // Arrange
    a = 30;
    b = 10;
    // Act
    output = cal.subtract(a, b);
    // Assert
    expect(output).toBe(20);
  });
  test('Check If the function return the correct value when one op values is negative:', () => {
      // Arrange
      a = 10;
      b = -20;
      // Act
      output = cal.subtract(a, b);
      // Assert
      expect(output).toBe(30);
    });
  test('Throw Error If first number is String', () => {
      // Arrange
      a = 'string';
      b = 20;
      // Assert
      expect(() => cal.subtract(a,b).toThrow(Error));
    });
  test('Throw Error If Second number is String', () => {
      // Arrange
      a = 10;
      b = 'string';
      // Assert
      expect(() => cal.subtract(a,b).toThrow(Error));
    });
  test('Throw Error If both numbers are String', () => {
      // Arrange
      a = 'string';
      b = 'string';
      // Assert
      expect(() => cal.subtract(a,b).toThrow(Error));
    });
});
describe('Multipling tow numbers', () => {
    test('Check If the function return the correct value:', () => {
      // Arrange
      a = 30;
      b = 10;
      // Act
      output = cal.multiply(a, b);
      // Assert
      expect(output).toBe(300);
    });
    test('Check If the function return the correct value when one op values is negative:', () => {
        // Arrange
        a = 10;
        b = -20;
        // Act
        output = cal.multiply(a, b);
        // Assert
        expect(output).toBe(-200);
      });
    test('Throw Error If first number is String', () => {
        // Arrange
        a = 'string';
        b = 20;
        // Assert
        expect(() => cal.multiply(a,b).toThrow(Error));
      });
    test('Throw Error If Second number is String', () => {
        // Arrange
        a = 10;
        b = 'string';
        // Assert
        expect(() => cal.multiply(a,b).toThrow(Error));
      });
    test('Throw Error If both numbers are String', () => {
        // Arrange
        a = 'string';
        b = 'string';
        // Assert
        expect(() => cal.multiply(a,b).toThrow(Error));
      });
  });
  describe('Dividing tow numbers', () => {
    test('Check If the function return the correct value:', () => {
      // Arrange
      a = 30;
      b = 10;
      // Act
      output = cal.divide(a, b);
      // Assert
      expect(output).toBe(3);
    });
    test('Check If the function return the correct value when one of values is negative:', () => {
        // Arrange
        a = 20;
        b = -10;
        // Act
        output = cal.divide(a, b);
        // Assert
        expect(output).toBe(-2);
      });
    test('Throw Error If first number is String', () => {
        // Arrange
        a = 'string';
        b = 20;
        // Assert
        expect(() => cal.divide(a,b).toThrow(Error));
      });
    test('Throw Error If Second number is String', () => {
        // Arrange
        a = 10;
        b = 'string';
        // Assert
        expect(() => cal.divide(a,b).toThrow(Error));
      });
    test('Throw Error If both numbers are String', () => {
        // Arrange
        a = 'string';
        b = 'string';
        // Assert
        expect(() => cal.divide(a,b).toThrow(Error));
      });
    test('Throw Error If both numbers are Zero', () => {
      // Arrange
      a = 0;
      b = 0;
      // Assert
      expect(() => cal.divide(a,b).toThrow(Error));
    });
    test('Throw Error If Divide by Zero', () => {
        // Arrange
        a = 20;
        b = 0;
        // Assert
        expect(() => cal.divide(a,b).toThrow(Error));
      });
    
  });