const inquirer = require('inquirer');
const fs = require ('fs');
const Shape  = require('./lib/Shape.js')
const Circle  = require('./lib/Circle.js')
const Triangle  = require('./lib/Triangle.js')
const Square  = require('./lib/Square.js') //importAllTheThings.jpg

const questions = [//inquirer questions
  {
    name: "shape", 
    message: "What shape would you like?",
    type: "list",
    choices: [
    "Square", "Circle", "Triangle"
    ]
  },
  {
    name: "shapeColor", 
    message: "What color would you like the shape to be? (Enter as text or as a hex value INCLUDING the # symbol)",
    type: "input",
  },
  {
    name: "text", 
    message: "Enter 3 character to be in your shape.",
    type: "input",
  },
  
  {
    name: "textColor", 
    message: "What color would you like the text to be? (Enter as text or as a hex value INCLUDING the # symbol)",
    type: "input",
  },
]


function init() {
  inquirer.prompt(questions)
    .then(({shape, shapeColor, text, textColor})=>{
      
      //deconstruct object from inquirer
      switch(shape){
        case "Square":
           newShape = new Square(shapeColor, text, textColor);
        break;
        case "Circle":
           newShape = new Circle(shapeColor, text, textColor);
        break;
        case "Triangle":
           newShape =new Triangle(shapeColor, text, textColor);
        break;
      }
    }).then(()=>{

      
      const svg = `${newShape.baseLine()} ${newShape.render()} ${newShape.baseEnd()}` // make svg file out of shape params/methods
      
      fs.writeFile('./examples/logo.svg', svg, (err)=>{
        if(err) {throw new Error(err)}
      });
      console.log('Generated logo.svg');
    })
    .catch((err) => {
      console.log(err);
      console.log('Oops. Something went wrong.');
    });
}
init()