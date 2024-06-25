---
sidebar_position: 2
---

# LineSegment2

`LineSegment2` 是笛卡尔坐标系中的二维线段。

![LineSegment2](/img/line-segment-2.png)

## 构造函数

您可以使用 `new` 方法创建 `LineSegment2` 对象，该方法接受两个参数：线段的 `source` 和 `target` 点。

```rust
let line_segment_2 = LineSegment2::new(Point2::new(1.0, 2.0), Point2::new(3.0, 4.0));
```

## 字段

`LineSegment2` 有两个字段：`source` 和 `target`，分别表示线段的源点和目标点。您可以使用 `source` 和 `target` 方法访问这些字段。

```rust
let source = segment_2.source();
let target = segment_2.target();
```
