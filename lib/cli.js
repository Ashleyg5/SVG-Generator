const inquirer = require(`inquirer`);
const svg = require(`./svg`);

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
        .then(({text, txtcolor, shape, shapecolor}) => {
            
            //needs to use conditional logic to pass user input to new shape const

            //if statements for shapes 'if new circle, circle"
            //fs writefile
        })
        .then((res) => {
        if (res === ok) { 
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