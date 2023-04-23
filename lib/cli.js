const inquirer = require(`inquirer`);
const fs = require(`fs`);
const svg = require(`./svg`);
const {Circle} = require(`./shapes`);
const {Triangle} = require(`./shapes`);
const {Square} = require(`./shapes`);

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
        .then(({data, shape}) => {
            const fileName = `./output/${shape}.svg`
            if (shape === Circle){
                new Circle.render();
            } else if (shape === Triangle){
                new Triangle.render();
            } else if (shape === Square){
                new Square.render();
            }
            
            fs.writeFile(fileName, data);
        })
        .then((data) => {
        if (data !== null) { 
            console.log(`Success! Your SVG file was generated in the output folder.`)
        }

        })
        .catch((err) => {
            if (err) {
                console.log(err)
            }
        })
    }
}

module.exports = CLI;