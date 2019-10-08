import {Geom} from "phaser";

class VoronoiDiagram {
    public triangles: Geom.Triangle[];
    public regions: []
    private _isRegionDirty : Boolean
    private _regions: Region[]

    public points: Geom.Point[];
    public frame: Geom.Point[];

    constructor(minX: number, minY: number, maxX: number, maxY: number) {
        this.triangles = [];
        const c1 = new Geom.Point(minX, minY);
        const c2 = new Geom.Point(minX, maxY);
        const c3 = new Geom.Point(maxX, minY);
        const c4 = new Geom.Point(maxX, maxY);

        this.frame = [c1,c2,c3,c4];
        this.points = [c1,c2,c3,c4];
    
        this.triangles.push( new Geom.Triangle(c1.x, c1.y, c2.x, c2.y, c3.x, c3.y));
        this.triangles.push( new Geom.Triangle(c2.x, c2.y, c3.x, c3.y, c4.x, c4.y));
        this._regions = this.points.map(point => this.buildRegion(point));


    } 

    buildRegion = (point: Geom.Point) => {
        const region = new Region(point);
        
 
        return region
    }
}


class Region {
    seed: Geom.Point;
    vertices : Geom.Triangle[];

    constructor(seed: Geom.Point) {
        this.seed = seed;
        this.vertices = [];
    }

    public sortVertices():Region {

        return this;
    }

    public center = (): Geom.Point => {

        return new Geom.Point();
    };

    public borders = () => {};

}