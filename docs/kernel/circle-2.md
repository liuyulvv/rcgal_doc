---
sidebar_position: 5
---

# Circle2

`Circle2` is a two-dimensional circle in the Cartesian coordinate system. It is a fundamental concept of the kernel, which is used to represent a circle with a center point and a radius.

![Circle2](/img/circle-2.png)

## Constructors

You can create a `Circle2` object using the `new` method, which takes two arguments: the `center` point and the `radius` of the circle.

```rust
let circle_2 = Circle2::new(Point2::new(1.0, 2.0), 3.0);
```

## Fields

`Circle2` has two fields: `center` and `radius`, which represent the center point and the radius of the circle, respectively. You can access these fields using the `center` and `radius` methods.

```rust
let center = circle_2.center();
let radius = circle_2.radius();
```
