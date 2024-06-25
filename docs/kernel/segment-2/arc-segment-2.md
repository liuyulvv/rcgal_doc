---
sidebar_position: 4
---

# ArcSegment2

`ArcSegment2` is a two-dimensional arc segment in Cartesian coordinates. It is a type of segment that represents a part of a circle segment.

![ArcSegment2](/img/arc-segment-2.png)

## Constructors

You can create an `ArcSegment2` object using the `new` method, which takes three arguments: the `support` circle segment, the `source_radian` and the `target_radian` of the arc segment.

```rust
let arc_segment_2 = ArcSegment2::new(
    CircleSegment2::new(Point2::new(0.0, 0.0), 3.0),
    0.0,
    3.0 / 2.0 * std::f64::consts::PI,
);
```

## Fields

`ArcSegment2` has three fields: `support`, `source_radian` and `target_radian`, which represent the support circle segment, the source radian and the target radian of the arc segment, respectively.

```rust
// impl Segment2 trait
let source = arc_segment_2.source();
let source_radian = arc_segment_2.source_radian();
let target = arc_segment_2.target();
let target_radian = arc_segment_2.target_radian();
let center = arc_segment_2.center();
let radius = arc_segment_2.radius();
```

## Methods

`ArcSegment2` has the following methods:

-   `monotone`: Returns a monotone representation of the arc segment.
-   `is_top`: Returns true if the arc segment is on the top side of the circle segment.

```rust
let arc_segments = arc_segment_2.monotone();
let is_top = arc_segment_2.is_top();
```
