const Shape  = require('./Shape')

class Circle extends Shape{
  constructor(shapeColor, text, textColor){
    super('circle', shapeColor, text, textColor) // 
    
  }
  render(){
      return `
      <${this.shape} cx="150" cy="100" r="80" fill="${this.shapeColor}" />

      <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = Circle