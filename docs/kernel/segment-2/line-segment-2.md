---
sidebar_position: 2
---

# LineSegment2

`LineSegment2` is a two-dimensional line segment in the Cartesian coordinate system.

![LineSegment2](/img/line-segment-2.png)

## Constructors

You can create a `LineSegment2` object using the `new` method, which takes two arguments: the `source` and `target` points of the segment.

```rust
let line_segment_2 = LineSegment2::new(Point2::new(1.0, 2.0), Point2::new(3.0, 4.0));
```

## Fields

`LineSegment2` has two fields: `source` and `target`, which represent the source and target points of the line segment, respectively. You can access these fields using the `source` and `target` methods.

```rust
let source = line_segment_2.source();
let target = line_segment_2.target();
```
