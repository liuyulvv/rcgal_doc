---
sidebar_position: 3
---

# CircleSegment2

`CircleSegment2` is a two-dimensional circle segment in the Cartesian coordinate system.

![CircleSegment2](/img/circle-segment-2.png)

## Constructors

You can create a `CircleSegment2` object using the `new` method, which takes two arguments: the `center` point and the `radius` of the circle.

```rust
let circle_segment_2 = CircleSegment2::new(Point2::new(1.0, 2.0), 3.0);
```

## Fields

`CircleSegment2` has two fields: `center` and `radius`, which represent the center point and the radius of the circle segment, respectively. You can access these fields using the `center` and `radius` methods.

```rust
let center = circle_segment_2.center();
let radius = circle_segment_2.radius();
```

## Methods

`CircleSegment2` has the following methods:

-   `monotone`: Returns a monotone representation of the circle segment.

```rust
let arc_segments = circle_segment_2.monotone();
```
