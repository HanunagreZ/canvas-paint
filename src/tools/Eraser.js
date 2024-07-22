import Brush from './Brush';

export default class Eraser extends Brush {
  constructor(canvas) {
    super(canvas);
  }

  draw(x, y) {
    const tempColor = this.ctx.strokeStyle;
    this.ctx.strokeStyle = 'White';
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    this.ctx.strokeStyle = tempColor;
  }
}
