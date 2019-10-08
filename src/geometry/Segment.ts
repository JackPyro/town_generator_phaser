import { Geom, Math } from "phaser";

class Segment {
  start: Geom.Point
  end: Geom.Point

  constructor(start: Geom.Point, end: Geom.Point) {
    this.start = start;
    this.end = end;
  }

  public get dx(): number {
    return this.end.x - this.start.x
  }

  public get dy(): number {
    return this.end.y - this.start.y
  }

  public get vector(): Geom.Point {
    return Geom.Point.Project(this.end, this.start);
  }

  public get length(): number {
    return Math.Distance.Between(this.end.x, this.end.y, this.start.x, this.start.y)
  }
}