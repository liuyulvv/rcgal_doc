---
sidebar_position: 2
---

# Point2

`Point2` 是笛卡尔坐标系中的二维点。它是内核的一个基本概念，用于表示几何对象的坐标。

![Point2](/img/point-2.png)

:::note
`Point2` 是一个泛型类型，这意味着您可以使用任何实现 `NumberType` 特性的类型作为数字类型。
:::

## 构造函数

您可以使用 `new` 方法创建一个 `Point2` 对象，该方法接受两个参数：点的 `x` 和 `y` 坐标。

```rust
let point_2 = Point2::new(1.0, 2.0);
```

## 字段

`Point2` 有两个字段：`x` 和 `y`，分别表示点的 `x` 和 `y` 坐标。您可以使用 `x` 和 `y` 方法访问这些字段。

```rust
let x = point_2.x();
let y = point_2.y();
```

## 方法

`Point2` 有几种方法，允许您对点执行常见操作。以下是一些最常用的方法：

-   `distance`：计算两个点之间的距离。
-   `equals`：检查两个点是否相等。
-   `get_vector`：返回从原点到点的向量

```rust
let point_1 = Point2::new(1.0, 2.0);
let point_2 = Point2::new(3.0, 4.0);
let distance = point_1.distance(&point_2);
let equals = point_1.equals(&point_2);
let vector = point_1.get_vector();
```

:::note
如果两个点之间的距离小于 `NumberType` 的 `default_eps`，则这两个点相等。
:::

## 运算符

由于 `Point2` 与 `Vector2` 有非常紧密的关系，`Point2`实现了 `Add` 和 `Sub` 特性。对两个点进行 `Add` 或 `Sub` 将返回一个 `Vector2` 对象。

```rust
let point_1 = Point2::new(1.0, 2.0);
let point_2 = Point2::new(3.0, 4.0);
let vector_add = point_1 + point_2;
let vector_sub = point_1 - point_2;
```

## 其他

`Point` 实现了 `Ord` 特性，当您需要对点列表进行排序或将它们存储在一些需要排序的数据结构中时，这将非常有用。

1. 靠`左`的点 `Greater`
2. 如果 `x` 坐标相等，靠`下`点 `Greater`
3. 如果 `x` 和 `y` 坐标相等，则两个点相等

```rust
impl<T: NumberType> Ord for Point2<T> {
    fn cmp(&self, other: &Self) -> std::cmp::Ordering {
        if self.x().equals(other.x()) {
            if self.y().equals(other.y()) {
                return std::cmp::Ordering::Equal;
            } else {
                if self.y() > other.y() {
                    return std::cmp::Ordering::Less;
                } else {
                    return std::cmp::Ordering::Greater;
                }
            }
        } else {
            if self.x() < other.x() {
                return std::cmp::Ordering::Greater;
            } else {
                return std::cmp::Ordering::Less;
            }
        }
    }
}
```
