// graph formula G = (V,E)
/* 
G = Graph
V = Vertex / Node
E = Edge / Links

* Spatial Graph
*/

class Graph {
  constructor(points = [], segments = []) {
    this.points = points;
    this.segments = segments;
  }

  addPoint(point) {
    this.points.push(point);
  }

  containsPoint(point) {
    return this.points.find((p) => {
      return p.equals(point);
    });
  }
  tryAddPoint(point) {
    if (!this.containsPoint(point)) {
      this.addPoint(point);
      return true;
    }
    return false;
  }
  removePoint(point) {
    console.log(point, this.points, "removing");
    const segs = this.getSegmentsWithPoint(point);
    for (const seg of segs) {
      this.removeSegment(seg);
    }
    this.points = this.points.filter((p) => {
      const _p = JSON.stringify(p);
      const _point = JSON.stringify(point);
      return _p !== _point;
    });
    // this.points.splice(this.segments.indexOf(point), 1);
  }
  addSegment(seg) {
    this.segments.push(seg);
  }
  containsSegment(seg) {
    return this.segments.find((s) => {
      return s.equals(seg);
    });
  }
  tryAddSegment(seg) {
    console.log(seg);
    if (!this.containsSegment(seg) && !seg.p1.equals(seg.p2)) {
      this.addSegment(seg);
      return true;
    }
    return false;
  }
  removeSegment(seg) {
    this.segments.splice(this.segments.indexOf(seg), 1);
  }

  getSegmentsWithPoint(point) {
    const segs = [];
    for (const seg of this.segments) {
      if (seg.includes(point)) {
        segs.push(seg);
      }
    }
    return segs;
  }
  dispose() {
    this.points.length = 0;
    this.segments.length = 0;
  }
  draw(ctx) {
    for (const point of this.points) {
      point.draw(ctx);
    }

    for (const seg of this.segments) {
      seg.draw(ctx);
    }
  }
}
