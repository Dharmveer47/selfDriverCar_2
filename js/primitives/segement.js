class Segment {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }
  /**
   * Determines if this segment is equal to the given segment.
   *
   * @param {Object} seg - The segment to compare.
   * @return {boolean} Returns true if the segments are equal, false otherwise.
   */
  equals(seg) {
    console.log(seg, "checking");
    return this.includes(seg.p1) && this.includes(seg.p2);
  }

  /**
   * Checks if the given point is included in the line segment.
   *
   * @param {Point} point - The point to check.
   * @return {boolean} True if the point is included in the line segment, false otherwise.
   */
  includes(point) {
    return this.p1.equals(point) || this.p2.equals(point);
  }
  /**
   * Draws a line on the canvas.
   *
   * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
   * @param {number} [width=2] - The width of the line (default: 2).
   * @param {string} [color="black"] - The color of the line (default: "black").
   */
  draw(ctx, width = 2, color = "black") {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(this.p1.x, this.p1.y);
    ctx.lineTo(this.p2.x, this.p2.y);
    ctx.stroke();
  }
}
