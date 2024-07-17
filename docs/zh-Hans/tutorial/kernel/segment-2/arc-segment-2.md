# ArcSegment2

`AecSegment2` 是笛卡尔坐标系中的二维圆弧。它表示圆的一部分。

![ArcSegment2](/assets/img/arc-segment-2.png)

## 构造函数

您可以使用 `new` 方法创建 `ArcSegment2` 对象，该方法接受三个参数：`support` 圆，圆弧的 `source_radian` 和 `target_radian`。

```rust
let arc_segment_2 = ArcSegment2::new(
    CircleSegment2::new(Point2::new(0.0, 0.0), 3.0),
    0.0,
    3.0 / 2.0 * std::f64::consts::PI,
);
```

## 字段

`ArcSegment2` 有三个字段：`support`、`source_radian` 和 `target_radian`，分别表示圆弧的圆、起始弧度和目标弧度。

```rust
// impl Segment2 trait
let source = arc_segment_2.source();
let source_radian = arc_segment_2.source_radian();
let target = arc_segment_2.target();
let target_radian = arc_segment_2.target_radian();
let center = arc_segment_2.center();
let radius = arc_segment_2.radius();
```

## 方法

`ArcSegment2` 有以下方法：

-   `monotone`：返回圆弧的单调表示。
-   `is_top`：如果圆弧在圆段的顶部，则返回 true。

```rust
let arc_segments = arc_segment_2.monotone();
let is_top = arc_segment_2.is_top();
```
