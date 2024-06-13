---
sidebar_position: 7
---

# Triangle2

`Triangle2` 是笛卡尔坐标系中的二维三角形。它是内核的基本概念，用于表示三个点之间的三角形。`Triangle2` 有三个顶点和三条边。

![Triangle2](/img/triangle-2.png)

## 构造函数

您可以使用 `new` 方法创建一个 `Triangle2` 对象，该方法接受三个参数：三角形的 `a`、`b` 和 `c` 点。

```rust
let triangle_2 = Triangle2::new(Point2::new(1.0, 2.0), Point2::new(3.0, 4.0), Point2::new(5.0, 6.0));
```

## 字段

`Triangle2` 有四个字段：`a`、`b`、`c` 和 `orientation`，分别表示三角形的三个顶点和三角形的方向。您可以使用 `a`、`b`、`c` 和 `orientation` 方法访问这些字段。

```rust
let a = triangle_2.a();
let b = triangle_2.b();
let c = triangle_2.c();
let orientation = triangle_2.orientation();
```

## 方法

`Triangle2` 有几种方法，允许您对三角形执行常见操作。以下是一些最常用的方法：

-   `area`：计算三角形的有向面积，如果方向是逆时针，则面积为正，如果方向是顺时针，则面积为负。
-   `edges`：返回三角形的三条边。
-   `vertices`：返回三角形的三个顶点。
-   `reverse_orientation`：反转三角形的方向。

```rust
let area = triangle_2.area();
let edges = triangle_2.edges();
let vertices = triangle_2.vertices();
triangle_2.reverse_orientation(); // mut 方法
```
