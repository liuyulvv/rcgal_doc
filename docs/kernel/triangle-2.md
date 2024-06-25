---
sidebar_position: 5
---

# Triangle2

`Triangle2` is a two-dimensional triangle in the Cartesian coordinate system. It is a fundamental concept of the kernel, which is used to represent the triangle between three points. `Triangle2` has three vertices and three edges.

![Triangle2](/img/triangle-2.png)

## Constructors

You can create a `Triangle2` object using the `new` method, which takes three arguments: the `a`, `b`, and `c` points of the triangle.

```rust
let triangle_2 = Triangle2::new(Point2::new(1.0, 2.0), Point2::new(3.0, 4.0), Point2::new(5.0, 6.0));
```

## Fields

`Triangle2` has four fields: `a`, `b`, `c` and `orientation`, which represent the three vertices of the triangle and the orientation of the triangle, respectively. You can access these fields using the `a`, `b`, `c` and `orientation` methods.

```rust
let a = triangle_2.a();
let b = triangle_2.b();
let c = triangle_2.c();
let orientation = triangle_2.orientation();
```

## Methods

`Triangle2` has several methods that allow you to perform common operations on triangles. Here are some of the most commonly used methods:

-   `area`: Computes the signed area of the triangle, which is positive if the orientation is counter-clockwise and negative if the orientation is clockwise.
-   `edges`: Returns the three edges of the triangle.
-   `vertices`: Returns the three vertices of the triangle.
-   `reverse_orientation`: Reverses the orientation of the triangle.

```rust
let area = triangle_2.area();
let edges = triangle_2.edges();
let vertices = triangle_2.vertices();
triangle_2.reverse_orientation(); // mut method
```
