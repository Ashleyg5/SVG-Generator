const SVG = require(`./svg`);
const {Triangle} = require(`./shapes`);


test(`should throw an error if text exceeds 3 characters.`, () => {
    const expectedError = new Error(`Text must not exceed 3 characters.`);
    const svg = new SVG();
    expect(() => svg.createText(`texvvvvvt`,`#ffff`)).toThrow(expectedError);
}) 

test(`should render a 300 x 200 svg element`, () => {
   const svg = new SVG()
   const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`
   expect(svg.render()).toEqual(expectedSvg);
})

test(`should render SVG`, () => {
    const svg = new SVG();
    svg.createText(`pink`, `SVG`);
    const shape = new Triangle();
    shape.setshapeColor(`black`);
    svg.createShape(shape);
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="black" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="pink">SVG</text></svg>`
    expect(svg.render()).toEqual(expectedSvg);
})
