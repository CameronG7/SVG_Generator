const colorName = require('color-name');// used to verify valid css style color names
class Shape {
  constructor(shape, shapeColor, text, textColor){

    function isValidColorName(name) {
      return typeof colorName[name.toLowerCase()] !== 'undefined'; //returns true if name is in colorName list 
    }
    if (text.length > 3) {
    throw new Error('`text` must contain at less than 3 characters.')
    };
    if (shapeColor.charAt(0) === '#'){// if shapeColor is a hexa value, check its either 4 or 7 characters long and then check the non- # values for validity

      if (!(shapeColor.trim().length !== 4 || shapeColor.trim().length !== 7)) {
        throw new Error('Invalid hexadecimal color');
      }
      // used chatgpt to generate this regex, checks the hex string validity (must be 0-9 and a-f)
      // since hex values can contain 3 or 6 characters (after the #) this regex will check the first 3 and if 
      // the string is 6 chars then it will check the the second half.  
      //  the i at the end makes it case insensitive as opposed to having to lowercase the test string
      if(!/^[a-f0-9]{3}(?:[a-f0-9]{3})?$/i.test(shapeColor.slice(1))){
        console.log(shapeColor.slice(1));
        throw new Error('Invalid hexadecimal color');
      }

    }
    else{
      if (!isValidColorName(shapeColor)){
      throw new Error('Invalid color name')
    }}

    if (textColor.charAt(0) === '#'){

      if (!(textColor.trim().length !== 4 || textColor.trim().length !== 7)) {
        throw new Error('Invalid hexadecimal color');
      }
    
      if(!/^[a-f0-9]{3}(?:[a-f0-9]{3})?$/i.test(textColor.slice(1))){
        console.log(textColor.slice(1));
        throw new Error('Invalid hexadecimal color');
      }

    }
    else{
      if (!isValidColorName(textColor)){
      throw new Error('Invalid color name')
    }}
    
    this.shape = shape;
    this.text = text;
    this.shapeColor = shapeColor;
    this.textColor = textColor;

  }

  baseLine(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
  }
  baseEnd(){  return `</svg>` }

}

module.exports = Shape;