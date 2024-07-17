# Vector2

`Vector2` is a two-dimensional vector in the Cartesian coordinate system.

![Vector2](/assets/img/vector-2.png)

:::note
`Vector2` is a generic type, which means you can use any type that implements the `NumberType` trait as the number type.
:::

## Constructors

You can create a `Vector2` object using the `new` method, which takes two arguments: the `x` and `y`components of the vector.

```rust
let vec_2 = Vector2::new(1.0, 2.0);
```

## Fields

`Vector2` has two fields: `x` and `y`, which represent the `x` and `y` components of the vector, respectively. You can access these fields using the `x` and `y` methods.

```rust
let x = vec_2.x();
let y = vec_2.y();
```

## Methods

`Vector2` has several methods that allow you to perform common operations on vectors. Here are some of the most commonly used methods:

-   `dot`: Computes the dot product of two vectors.
-   `cross`: Computes the cross product of two vectors.
-   `length`: Computes the length of the vector.
-   `normalize`: Normalizes the vector.
-   `radian_to`: Computes the angle between two vectors in radians.

```rust
let vec_a = Vector2::new(1.0, 2.0);
let vec_b = Vector2::new(3.0, 4.0);
let dot = vec_a.dot(&vec_b);
let cross = vec_a.cross(&vec_b);
let length = vec_a.length();
let normalized_vec_a = vec_a.normalize();
let radian_to = vec_a.radian_to(&vec_b);
```

## Operators

`Vector2` implements `Add`, `Sub`, `Mul`, and `Div` traits, which allow you to perform common arithmetic operations on vectors. For `Mul` and `Div`, you can **only** put the scalar on the **right** side of the operator.

```rust
let vac_a = Vector2::new(1.0, 2.0);
let vec_b = Vector2::new(3.0, 4.0);
let sum = vec_a + vec_b;
let difference = vec_a - vec_b;
let scaled = vec_a * 2.0;
let divided = vec_a / 2.0;
```

`Vector2` also implements ths `PartialEq` trait, which allows you to compare two vectors for equality. It compares the x and y components of the vectors through the `equals` method of the `NumberType` trait.
