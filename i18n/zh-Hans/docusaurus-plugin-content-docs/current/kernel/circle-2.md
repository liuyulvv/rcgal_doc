---
sidebar_position: 5
---

# Circle2

`Circle-2` 是笛卡尔坐标系中的二维圆。它是内核的基本概念，用于表示具有中心点和半径的圆。

![Circle2](/img/circle-2.png)

## 构造函数

您可以使用 `new` 方法创建一个 `Circle2` 对象，该方法接受两个参数：圆的 `center` 点和 `radius`。

```rust
let circle_2 = Circle2::new(Point2::new(1.0, 2.0), 3.0);
```

## 字段

`Circle2` 有两个字段：`center` 和 `radius`，分别表示圆的中心点和半径。您可以使用 `center` 和 `radius` 方法访问这些字段。

```rust
let center = circle_2.center();
let radius = circle_2.radius();
```
