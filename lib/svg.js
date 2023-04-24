//declared a class of SVG with contructors for text and shape element then inserted render functions to return the correct SVG width and height, template literaling the shape and text elements 

class SVG {
    constructor() {
        this.textElement = ``;
        this.shapeElement = ``;
        
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`

    } //create text function to pass the text and text color info. inputted logic to check if text inputted is greater than 3 characters, which will throw a new error
    createText(txtcolor, text){
        if (text.length > 3){
            throw new Error(`Text must not exceed 3 characters.`);
        }
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${txtcolor}">${text}</text>`
    }//create shape function to pass the shape element and render it in svg form
    createShape(shape){
        this.shapeElement = shape.render();
    }
}

module.exports = SVG;