---
sidebar_position: 1
---

# Number Type

The `number type` is a fundamental concept of the kernel, which is used to represent the coordinates of geometric objects. The number type is a generic type, which means you can use any type that implements the `NumberType` trait as the number type.

`NumberType` trait was like this:

```rust
pub trait DefaultNumberValueTrait {
    fn default() -> Self;
    fn default_eps() -> Self;
    fn zero() -> Self;
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

RCGAL officially implements the `NumberType` trait for the `f32` and `f64`, and you can use them directly. If you want to use other types, you need to implement the `NumberType` trait for them.
