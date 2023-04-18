const Shape  = require('./Shape')

class Triangle extends Shape{
  constructor(shapeColor, text, textColor){
    super(`polygon`, shapeColor, text, textColor)
    
  }
  render(){
      return `
      <${this.shape} points="150,10 270,190 30,190" fill="${this.shapeColor}" />

      <text x="150" y="145" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = Triangle