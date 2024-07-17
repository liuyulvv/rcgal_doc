# CircleSegment2

`CircleSegment2` 是笛卡尔坐标系中的二维圆。

![CircleSegment2](/assets/img/circle-segment-2.png)

## 构造函数

您可以使用 `new` 方法创建一个 `CircleSegment2` 对象，该方法接受两个参数：圆的 `center` 点和 `radius`。

```rust
let circle_segment_2 = CircleSegment2::new(Point2::new(1.0, 2.0), 3.0);
```

## 字段

`CircleSegment2` 有两个字段：`center` 和 `radius`，分别表示圆的中心点和半径。您可以使用 `center` 和 `radius` 方法访问这些字段。

```rust
let center = circle_segment_2.center();
let radius = circle_segment_2.radius();
```

## 方法

`CircleSegment2` 有以下方法：

-   `monotone`：返回圆的单调表示。

```rust
let arc_segments = circle_segment_2.monotone();
```
