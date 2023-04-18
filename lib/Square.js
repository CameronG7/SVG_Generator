const Shape  = require('./Shape')

class Square extends Shape{
  constructor(shapeColor, text, textColor){
    super('rect', shapeColor, text, textColor)
    
  }
  render(){
      return `
      <${this.shape} x="65" y="15" width="170" height="170"  fill="${this.shapeColor}" />

      <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}
module.exports = Square