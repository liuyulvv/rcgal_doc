---
sidebar_position: 1
---

# Segment2

`Segment2` is a `trait` that represents a 2D segment in Cartesian coordinates.

`LineSegment2`, `CircleSegment2`, and `ArcSegment2` are the three types of segments that implement the `Segment2` trait.

`Segment2` trait was like this:

```rust
pub trait Segment2<T: NumberType>: Debug + Clone + Copy {
    fn segment_type(&self) -> Segment2Type;
    fn source(&self) -> Point2<T>;
    fn source_radian(&self) -> T;
    fn target(&self) -> Point2<T>;
    fn target_radian(&self) -> T;
    fn center(&self) -> Point2<T>;
    fn radius(&self) -> T;
}
```

:::danger
Not all methods are implemented for all types of segments.

LineSegment2 does not implement `source_radian`, `target_radian`, `center`, and `radius` methods.

CircleSegment2 does not implement `source`, `source_radian`, `target`, `target_radian` methods.

ArcSegment2 implements all methods.
:::
