const {Triangle, Circle, Square} = require(`./shapes`);

test(`should render a triangle`, () => {
    const shape = new Triangle();
    shape.setshapeColor(`blue`);
    const expectedShape = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`
    expect(shape.render()).toEqual(expectedShape);
})

//testing for all 3 shapes using the setshapecolor function

test(`should render a circle`, () => {
    const shape = new Circle();
    shape.setshapeColor(`pink`);
    const expectedShape = `<circle cx="150" cy="100" r="80" fill="pink" />`
    expect(shape.render()).toEqual(expectedShape);
})

test(`should render a square`, () => {
    const shape = new Square();
    shape.setshapeColor(`purple`);
    const expectedShape = ` <rect x="90" y="40" width="120" height="120" fill="purple" />`
    expect(shape.render()).toEqual(expectedShape);
})

