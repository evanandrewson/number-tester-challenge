import isEven from "../is-even.js";

const test = QUnit.test;

test('is even', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = 4
    const expected = true

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isEven(number)
    //Assert
    // What should the result be?
    assert.equal(result, expected);
});

test('is odd', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = 3
    const expected = false

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isEven(number)
    //Assert
    // What should the result be?
    assert.equal(result, expected);
});