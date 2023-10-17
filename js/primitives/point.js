class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  equals(point) {
    return this.x === point.x && this.y === point.y;
  }
  /**
   * Draw a circle on the canvas.
   *
   * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
   * @param {number} size - The size of the circle.
   * @param {string} color - The color of the circle.
   */
  draw(
    ctx,
    { size = 18, color = "black", outline = false, fill = false } = {}
  ) {
    const rad = size / 2;
    ctx.beginPath();
    // ctx.fillStyle = color;
    ctx.arc(this.x, this.y, rad, 0, Math.PI * 2);
    ctx.fill();
    if (fill) {
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = "red";
      ctx.arc(this.x, this.y, rad * 0.6, 0, Math.PI * 2);
      ctx.stroke();
    }
    if (outline) {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "yellow";
      ctx.arc(this.x, this.y, rad * 0.6, 0, Math.PI * 2);
      ctx.stroke();
    }
  }
}
