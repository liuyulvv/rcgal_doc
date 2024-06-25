---
sidebar_position: 1
---

# Segment2

`Segment2` 是一个在笛卡尔坐标系中表示二维线段的 `trait`。

`LineSegment2`、`CircleSegment2` 和 `ArcSegment2` 是实现 `Segment2` trait 的三种线段类型。

`Segment2` trait 如下：

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
并非所有方法都适用于所有类型的线段。

`LineSegment2` 不实现 `source_radian`、`target_radian`、`center` 和 `radius` 方法。

`CircleSegment2` 不实现 `source`、`source_radian`、`target` 和 `target_radian` 方法。

`ArcSegment2` 实现所有方法。
:::
