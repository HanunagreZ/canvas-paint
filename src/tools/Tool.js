export default class Tool {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.destroyEvents();
  }

  fillColor(color) {
    this.ctx.fillStyle = color;
  }

  strokeColor(color) {
    this.ctx.strokeStyle = color;
  }

  lineWidth(width) {
    this.ctx.lineWidth = width;
  }

  destroyEvents() {
    this.canvas.onmouseup = null;
    this.canvas.onmousedown = null;
    this.canvas.onmousemove = null;
  }
}
