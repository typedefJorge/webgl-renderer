import { Shape } from "./shape";
import { ShapeMode } from "./shapeModes";
import { Triangle } from "./triangle";
import { Rectangle } from "./rectangle";
import { Hexagon } from "./hexagon"
import { Point3d } from "./point3d";
import { Point2d } from "./point2d";
import { Color } from "../color";

export class ShapeFactory
{
    static createShape(point1: Point2d, point2: Point2d, shapeMode: ShapeMode, gl: WebGLRenderingContext): Shape
    {
        switch(shapeMode)
        {
            case ShapeMode.Triangles:
                return this.createTriangle(point1, point2, gl);
            case ShapeMode.Rectangles:
                return this.createRectangle(point1, point2, gl);
            case ShapeMode.Hexagons:
                return this.createHexagon(point1, point2, gl);
            default:
                throw Error(`cannot recognize shape type ${shapeMode}`);
        }
    }

    static createTriangle(point1: Point2d, point2: Point2d, gl: WebGLRenderingContext): Triangle
    {
        return new Triangle(point1, point2, gl);
    }

    static createRectangle(point1: Point2d, point2: Point2d, gl: WebGLRenderingContext): Rectangle
    {
        return new Rectangle(point1, point2, gl);
    };

    static createHexagon(point1: Point2d, point2: Point2d, gl: WebGLRenderingContext): Hexagon
    {
        return new Hexagon(point1, point2, gl);
        // youre 
        // cute baby you know its true
        // love, 
        // - your girlfriend
    }

    static createPoint3d(x: number, y: number, z: number, pointSize: number, color: Color): Point3d
    {
        return new Point3d(x, y, z, pointSize, color);
    }
}