/* tslint:disable */
/* eslint-disable */
/**
* @param {Point2} point
* @param {CircleSegment2} segment
* @returns {boolean}
*/
export function is_point_2_on_circle_segment_2(point: Point2, segment: CircleSegment2): boolean;
/**
* @param {Point2} point
* @param {CircleSegment2} segment
* @returns {Point2Circle2Location}
*/
export function locate_point_2_circle_segment_2(point: Point2, segment: CircleSegment2): Point2Circle2Location;
/**
* @param {Point2} point
* @param {LineSegment2} segment
* @returns {boolean}
*/
export function is_point_2_on_line_segment_2(point: Point2, segment: LineSegment2): boolean;
/**
* @param {Point2} point
* @param {LineSegment2} segment
* @returns {Point2Segment2Location}
*/
export function locate_point_2_line_segment_2(point: Point2, segment: LineSegment2): Point2Segment2Location;
/**
* @param {Point2} point
* @param {LineSegment2} segment
* @returns {Point2 | undefined}
*/
export function point_2_project_line_segment_2(point: Point2, segment: LineSegment2): Point2 | undefined;
/**
* @param {Polygon2} polygon
* @returns {(Triangle2Indices)[]}
*/
export function earcut(polygon: Polygon2): (Triangle2Indices)[];
/**
* @param {Point2} point
* @param {ArcSegment2} segment
* @returns {boolean}
*/
export function is_point_2_on_arc_segment_2(point: Point2, segment: ArcSegment2): boolean;
/**
* @param {Point2} point
* @param {ArcSegment2} segment
* @returns {Point2ArcSegment2Location}
*/
export function locate_point_2_arc_segment_2(point: Point2, segment: ArcSegment2): Point2ArcSegment2Location;
/**
* @param {Point2} point
* @param {Polygon2} polygon
* @returns {Point2Polygon2Location}
*/
export function locate_point_2_polygon_2(point: Point2, polygon: Polygon2): Point2Polygon2Location;
/**
* @param {Point2} point
* @param {Triangle2} triangle
* @returns {Point2Triangle2Location}
*/
export function locate_point_2_triangle_2(point: Point2, triangle: Triangle2): Point2Triangle2Location;
/**
* @param {Segment2} segment_a
* @param {Segment2} segment_b
* @returns {boolean}
*/
export function is_segment_2_segment_2_intersected(segment_a: Segment2, segment_b: Segment2): boolean;
/**
* @param {Segment2} segment_a
* @param {Segment2} segment_b
* @returns {(Point2)[]}
*/
export function segment_2_segment_2_intersection(segment_a: Segment2, segment_b: Segment2): (Point2)[];
/**
*/
export enum Point2Segment2Location {
  On = 0,
  Left = 1,
  Right = 2,
  Collinear = 3,
}
/**
*/
export enum Point2Triangle2Location {
  On = 0,
  Inside = 1,
  Outside = 2,
}
/**
*/
export enum Point2Ray2Location {
  On = 0,
  Left = 1,
  Right = 2,
  Collinear = 3,
}
/**
*/
export enum Orientation {
  Clockwise = 0,
  CounterClockwise = 1,
}
/**
*/
export enum Point2Circle2Location {
  On = 0,
  Inside = 1,
  Outside = 2,
}
/**
*/
export enum Point2ArcSegment2Location {
  On = 0,
  NotOn = 1,
}
/**
*/
export enum Segment2Type {
  LineSegment2 = 0,
  CircleSegment2 = 1,
  ArcSegment2 = 2,
}
/**
*/
export enum Point2Polygon2Location {
  On = 0,
  Inside = 1,
  Outside = 2,
}
/**
*/
export enum Edge2Type {
  Segment = 0,
  Arc = 1,
}
/**
*/
export enum TurnDirection {
  Left = 0,
  Right = 1,
  Collinear = 2,
}
/**
*/
export class ArcSegment2 {
  free(): void;
/**
* @param {CircleSegment2} support
* @param {number} source_radian
* @param {number} target_radian
*/
  constructor(support: CircleSegment2, source_radian: number, target_radian: number);
/**
* @returns {Segment2Type}
*/
  segment_type(): Segment2Type;
/**
* @returns {Point2}
*/
  source(): Point2;
/**
* @returns {number}
*/
  source_radian(): number;
/**
* @returns {Point2}
*/
  target(): Point2;
/**
* @returns {number}
*/
  target_radian(): number;
/**
* @returns {Point2}
*/
  center(): Point2;
/**
* @returns {number}
*/
  radius(): number;
}
/**
*/
export class CircleSegment2 {
  free(): void;
/**
* @param {Point2} center
* @param {number} radius
*/
  constructor(center: Point2, radius: number);
/**
* @returns {Segment2Type}
*/
  segment_type(): Segment2Type;
/**
* @returns {Point2}
*/
  center(): Point2;
/**
* @returns {number}
*/
  radius(): number;
}
/**
*/
export class ConvexHull2 {
  free(): void;
/**
* @param {(Point2)[]} points
*/
  constructor(points: (Point2)[]);
/**
* @returns {(Point2)[]}
*/
  convex_hull(): (Point2)[];
}
/**
*/
export class LineSegment2 {
  free(): void;
/**
* @param {Point2} source
* @param {Point2} target
*/
  constructor(source: Point2, target: Point2);
/**
* @returns {Segment2Type}
*/
  segment_type(): Segment2Type;
/**
* @returns {Point2}
*/
  source(): Point2;
/**
* @returns {Point2}
*/
  target(): Point2;
}
/**
*/
export class Point2 {
  free(): void;
/**
* @param {number} x
* @param {number} y
*/
  constructor(x: number, y: number);
/**
* @returns {number}
*/
  x(): number;
/**
* @returns {number}
*/
  y(): number;
/**
* @param {Point2} other
* @returns {boolean}
*/
  equals(other: Point2): boolean;
/**
* @returns {Vector2}
*/
  get_vector(): Vector2;
/**
* @param {Point2} other
* @returns {number}
*/
  distance(other: Point2): number;
/**
* @param {Point2} p
* @param {Point2} q
* @param {Point2} r
* @returns {TurnDirection}
*/
  static turn(p: Point2, q: Point2, r: Point2): TurnDirection;
}
/**
*/
export class Polygon2 {
  free(): void;
/**
* @param {(Point2)[]} points
*/
  constructor(points: (Point2)[]);
/**
* @returns {(Point2)[]}
*/
  vertices(): (Point2)[];
/**
* @returns {(LineSegment2)[]}
*/
  edges(): (LineSegment2)[];
/**
* @returns {number}
*/
  area(): number;
/**
* @returns {boolean}
*/
  is_simple(): boolean;
/**
* @returns {boolean}
*/
  is_convex(): boolean;
}
/**
*/
export class Segment2 {
  free(): void;
/**
* @param {Segment2Type} segment_type
* @param {LineSegment2 | undefined} [line_segment_2]
* @param {CircleSegment2 | undefined} [circle_segment_2]
* @param {ArcSegment2 | undefined} [arc_segment_2]
*/
  constructor(segment_type: Segment2Type, line_segment_2?: LineSegment2, circle_segment_2?: CircleSegment2, arc_segment_2?: ArcSegment2);
/**
*/
  arc_segment_2?: ArcSegment2;
/**
*/
  circle_segment_2?: CircleSegment2;
/**
*/
  line_segment_2?: LineSegment2;
/**
*/
  segment_type: Segment2Type;
}
/**
*/
export class SweepSegment2Intersection {
  free(): void;
/**
*/
  constructor();
/**
* @param {Segment2} segment_2
*/
  push_segment(segment_2: Segment2): void;
/**
* @returns {(Point2)[]}
*/
  intersection(): (Point2)[];
}
/**
*/
export class Triangle2 {
  free(): void;
/**
* @param {Point2} a
* @param {Point2} b
* @param {Point2} c
*/
  constructor(a: Point2, b: Point2, c: Point2);
/**
* @returns {Point2}
*/
  a(): Point2;
/**
* @returns {Point2}
*/
  b(): Point2;
/**
* @returns {Point2}
*/
  c(): Point2;
/**
* @returns {(Point2)[]}
*/
  vertices(): (Point2)[];
/**
* @returns {(LineSegment2)[]}
*/
  edges(): (LineSegment2)[];
/**
* @returns {Orientation}
*/
  orientation(): Orientation;
/**
*/
  reverse_orientation(): void;
/**
* @returns {number}
*/
  area(): number;
}
/**
*/
export class Triangle2Indices {
  free(): void;
/**
*/
  a: number;
/**
*/
  b: number;
/**
*/
  c: number;
}
/**
*/
export class Vector2 {
  free(): void;
/**
* @param {number} x
* @param {number} y
*/
  constructor(x: number, y: number);
/**
* @returns {number}
*/
  x(): number;
/**
* @returns {number}
*/
  y(): number;
/**
* @returns {number}
*/
  length(): number;
/**
* @returns {Vector2}
*/
  normalize(): Vector2;
/**
* @param {Vector2} other
* @returns {number}
*/
  dot(other: Vector2): number;
/**
* @param {Vector2} other
* @returns {number}
*/
  cross(other: Vector2): number;
/**
* @param {Vector2} other
* @returns {number}
*/
  radian_to(other: Vector2): number;
}
