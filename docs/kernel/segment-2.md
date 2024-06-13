---
sidebar_position: 4
---

# Segment2

`Segment2` is a two-dimensional line segment in the Cartesian coordinate system. It is a fundamental concept of the kernel, which is used to represent the line segment between two points. `Segment2` has direction and length.

![Segment2](/img/segment-2.png)

## Constructors

You can create a `Segment2` object using the `new` method, which takes two arguments: the `source` and `target` points of the segment.

```rust
let segment_2 = Segment2::new(Point2::new(1.0, 2.0), Point2::new(3.0, 4.0));
```

## Fields

`Segment2` has two fields: `source` and `target`, which represent the source and target points of the segment, respectively. You can access these fields using the `source` and `target` methods.

```rust
let source = segment_2.source();
let target = segment_2.target();
```
