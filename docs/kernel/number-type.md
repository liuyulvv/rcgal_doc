---
sidebar_position: 1
---

# Number Type

The `number type` is a fundamental concept of the kernel, which is used to represent the `number`. The `number type` is a generic type, which means you can use any type that implements the `NumberType` trait as the number type.

`NumberType` trait was like this:

```rust
pub trait DefaultNumberValueTrait {
    fn default() -> Self;
    fn default_eps() -> Self;
    fn zero() -> Self;
    fn from_f64(value: f64) -> Self;
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
{
    fn equals(self, other: Self) -> bool;
    fn sqrt(self) -> Self;
    fn abs(self) -> Self;
}
```

:::note
`equals` return `true` if two numbers are equal, which means the absolute difference between them is less than `default_eps`.
:::

RCGAL implements the `NumberType` trait for the `f32` and `f64`, and you can use them directly. If you want to use other types, you need to implement the `NumberType` trait for them.
