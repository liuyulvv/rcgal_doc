---
sidebar_position: 4
---

# Segment2

`Segment2` 是笛卡尔坐标系中的二维线段。它是内核的基本概念，用于表示两点之间的线段。`Segment2` 具有方向和长度。

![Segment2](/img/segment-2.png)

## 构造函数

您可以使用 `new` 方法创建 `Segment2` 对象，该方法接受两个参数：线段的 `source` 和 `target` 点。

```rust
let segment_2 = Segment2::new(Point2::new(1.0, 2.0), Point2::new(3.0, 4.0));
```

## 字段

`Segment2` 有两个字段：`source` 和 `target`，分别表示线段的源点和目标点。您可以使用 `source` 和 `target` 方法访问这些字段。

```rust
let source = segment_2.source();
let target = segment_2.target();
```
