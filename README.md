# SVG-Generator

## User Story
``
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
``

## Acceptance Criteria
``
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
``

## Description
 
This is challenge 10 of the bootcamp. I was tasked with creating an SVG logo generator using node.js, javascript, and jest. The user will be able to open the terminal and input 'node index' and then will be met with a prompt of questions (logo text, text color, logo shape, shape color). Once the user finishes all the prompts, they will be met with a log "Success! Your SVG file was generated in the output folder." unless there is an error. The user will then see the "logo.svg" generate inside the "output" folder. When opened in a browser, the logo svg image will generate following the parameters inputted by user. 

## Usage

 [Video Submission Link](https://drive.google.com/file/d/1ekTmNZqlc6dr0bh6MaezXMCEzWGiDFOC/view)
![README Generator](https://i.gyazo.com/b8bbac60fe3ed749a96139154a17e980.png)
![README Generator](https://i.gyazo.com/81f9e8a7dd2fb72163eed1818605d2eb.png)



## Credits

[Resource 1](https://www.w3schools.com/graphics/svg_polygon.asp)

[Resource 2](https://www.geeksforgeeks.org/node-js-fs-writefile-method/)

[Resource 3](https://www.w3schools.com/graphics/svg_rect.asp)

[Resource 4](https://www.adobe.com/creativecloud/file-types/image/vector/svg-file.html)

My classmates, instructor, and TA's.

## License

MIT

