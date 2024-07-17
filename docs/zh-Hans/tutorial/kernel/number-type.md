# Number type

`number type` 是内核的一个基本概念，用于表示`数字`。`number type`是一个泛型类型，这意味着您可以使用任何实现 `NumberType` 特性的类型作为数字类型。

`NumberType` 特性如下：

```rust
pub trait DefaultNumberValueTrait {
    fn default() -> Self;
    fn default_eps() -> Self;
    fn zero() -> Self;
    fn from_f64(value: f64) -> Self;
    fn pi() -> Self;
}

pub trait NumberType:
    DefaultNumberValueTrait
    + Add<Output = Self>
    + Sub<Output = Self>
    + Mul<Output = Self>
    + Div<Output = Self>
    + Neg<Output = Self>
    + PartialOrd
    + Clone
    + Copy
    + Debug
    + Display
{
    fn equals(self, other: Self) -> bool;
    fn sqrt(self) -> Self;
    fn abs(self) -> Self;
    fn sin(self) -> Self;
    fn cos(self) -> Self;
    fn acos(self) -> Self;
    fn atan(self) -> Self;
    fn atan2(self, other: Self) -> Self;
}
```

:::note
如果两个数字相等 `equals` 方法返回 `true`，这意味着它们之间的绝对差小于 `default_eps`。
:::

RCGAL 为 `f32` 和 `f64` 实现了 `NumberType` 特性，您可以直接使用它们。如果您想使用其他类型，您需要为它们实现 `NumberType` 特性。
