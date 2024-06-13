---
sidebar_position: 2
---

# Vector2

`Vector2` 是笛卡尔坐标系中的二维向量。

![Vector2](/img/vector-2.png)

:::note
`Vector2` 是一个泛型类型，这意味着您可以使用任何实现 `NumberType` 特性的类型作为数字类型。
:::

## 构造函数

您可以使用 `new` 方法创建一个 `Vector2` 对象，该方法接受两个参数：向量的 `x` 和 `y` 分量。

```rust
let vec_2 = Vector2::new(1.0, 2.0);
```

## 字段

`Vector2` 有两个字段：`x` 和 `y`，分别表示向量的 `x` 和 `y` 分量。您可以使用 `x` 和 `y` 方法访问这些字段。

```rust
let x = vec_2.x();
let y = vec_2.y();
```

## 方法

`Vector2` 有几种方法，允许您对向量执行常见操作。以下是一些最常用的方法：

-   `dot`：计算两个向量的点积。
-   `cross`：计算两个向量的叉积。
-   `length`：计算向量的长度。
-   `normalize`：对向量进行归一化。

```rust
let vec_a = Vector2::new(1.0, 2.0);
let vec_b = Vector2::new(3.0, 4.0);
let dot = vec_a.dot(&vec_b);
let cross = vec_a.cross(&vec_b);
let length = vec_a.length();
let normalized_vec_a = vec_a.normalize();
```

## 运算符

`Vector2` 实现了 `Add`、`Sub`、`Mul` 和 `Div` 特性，这允许您对向量执行常见的算术运算。对于 `Mul` 和 `Div`，您**只能**将标量放在运算符的**右侧**。

```rust
let vac_a = Vector2::new(1.0, 2.0);
let vec_b = Vector2::new(3.0, 4.0);
let sum = vec_a + vec_b;
let difference = vec_a - vec_b;
let scaled = vec_a * 2.0;
let divided = vec_a / 2.0;
```

`Vector2`也实现了`PartialEq`特性, 允许您比较两个向量是否相等。 它通过`NumberType`特性的`equals`方法比较向量的 x 和 y 分量。
