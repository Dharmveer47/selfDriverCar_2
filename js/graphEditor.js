class GraphEditor {
  constructor(canvas, graph) {
    this.canvas = canvas;
    this.graph = graph;
    this.dragging = false;

    this.selected = null;
    this.hovered = null;

    this.ctx = canvas.getContext("2d");

    // private method
    this.#addEventListeners();
  }
  #addEventListeners() {
    this.canvas.addEventListener("mousedown", (evt) => {
      if (evt.button === 2) {
        //Right click
        if (this.hovered) {
          this.#removePoint(this.hovered);
        } else {
          this.selected = null;
        }
      }
      if (evt.button === 0) {
        //Left click
        const mouse = new Point(evt.offsetX, evt.offsetY);

        if (this.hovered) {
          this.#select(this.hovered);
          // if (this.selected) {
          //   this.graph.tryAddSegment(new Segment(this.selected, this.hovered));
          // }
          // this.selected = this.hovered;
          this.dragging = true;
          return;
        }

        this.graph.addPoint(mouse);
        this.#select(hovered);
        // if (this.selected) {
        //   this.graph.tryAddSegment(new Segment(this.selected, mouse));
        // }
        // this.selected = mouse;
        this.hovered = mouse;
      }
    });
    this.canvas.addEventListener("mousemove", (evt) => {
      const mouse = new Point(evt.offsetX, evt.offsetY);
      this.hovered = getNearestPoint(mouse, this.graph.points, 15);
      if (this.dragging) {
        this.selected.x = mouse.x;
        this.selected.y = mouse.y;
      }
    });

    this.canvas.addEventListener("contextmenu", (evt) => evt.preventDefault());
    // Mouse events
    this.canvas.addEventListener("mouseup", () => (this.dragging = false));
  }
  #removePoint(point) {
    this.graph.removePoint(point);
    this.hovered = null;
    if (this.selected === point) {
      this.selected = null;
    }
  }
  #select(point) {
    if (this.selected) {
      this.graph.tryAddSegment(new Segment(this.selected, point));
    }
    this.selected = point;
  }
  display() {
    this.graph.draw(this.ctx);
    if (this.selected) {
      this.selected.draw(this.ctx, { outline: true });
    }
    if (this.hovered) {
      this.hovered.draw(this.ctx, { fill: true });
    }
  }
}
