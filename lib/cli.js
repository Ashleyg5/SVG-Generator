//requiring all needed files/npm packages
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const SVG = require(`./svg`);
const { Circle } = require(`./shapes`);
const { Triangle } = require(`./shapes`);
const { Square } = require(`./shapes`);

//class CLI which returns prompt in terminal for user to input all parameters
class CLI {
    run() {
        return inquirer
            .prompt([
                {
                    type: `input`,
                    message: `Please enter the desired text for your logo (Max. 3 characters):`,
                    name: `text`
                },
                {
                    type: `input`,
                    message: `Please enter desired text color:`,
                    name: `txtcolor`
                },
                {
                    type: `list`,
                    message: `Please select desired shape of your logo:`,
                    choices: [`Circle`, `Square`, `Triangle`],
                    name: `shape`
                },
                {
                    type: `input`,
                    message: `Please enter desired shape color:`,
                    name: `shapecolor`
                }
            ])
            //then function which has logic to check which shape was chosen, and the fs writefile 
            .then((data) => {
                let shape
                const fileName = `./output/logo.svg`
                const svg = new SVG()

                if (data.shape === `Circle`) {
                    shape = new Circle
                } else if (data.shape === `Triangle`) {
                    shape = new Triangle
                } else if (data.shape === `Square`) {
                    shape = new Square
                }
                //grabs information from shapes.js and svg.js to set to variables declared in this .then
                shape.setshapeColor(data.shapecolor)
                svg.createText(data.txtcolor, data.text)
                svg.createShape(shape)

                fs.writeFile(fileName, svg.render(), (err) => {
                    if (err) {//if statement to check for any errors in the file writing process
                        console.log(err)

                    } console.log(`Success! Your SVG file was generated in the output folder.`)
                });
            })
            //catch to check for any errors in the prompt
            .catch((err) => {
                if (err) {
                    console.log(err)
                }
            })
    }
}

module.exports = CLI;