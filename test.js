// Import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound  } = require('./app.js');


test("One euro should be 1.07 dollars", () => {
    
    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
});

test("1 dollar debe ser 146.26 yenes", () => {
    const yenes = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(yenes).toBeCloseTo(expected, 2); 
});

test("100 yenes debe ser 0.56 pounds", () => {
    const pounds = fromYenToPound(100);
    const expected = (100 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(expected, 2); 
});