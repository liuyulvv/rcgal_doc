---
sidebar_position: 3
---

# Point2

`Point2` is a two-dimensional point in the Cartesian coordinate system.

![Point2](/img/point-2.png)

:::note
`Point2` is a generic type, which means you can use any type that implements the `NumberType` trait as the number type.
:::

## Constructors

You can create a `Point2` object using the `new` method, which takes two arguments: the x and y coordinates of the point.

```rust
let point_2 = Point2::new(1.0, 2.0);
```

## Fields

`Point2` has two fields: `x` and `y`, which represent the x and y coordinates of the point, respectively. You can access these fields using the `x` and `y` methods.

```rust
let x = point_2.x();
let y = point_2.y();
```

## Methods

`Point2` has several methods that allow you to perform common operations on points. Here are some of the most commonly used methods:

-   `distance`: Computes the distance between two points.
-   `equals`: Checks if two points are equal.
-   `get_vector`: Returns a vector from the origin to the point.
-   `turn`: Calculate the TurnDirection of three points.

```rust
let point_1 = Point2::new(1.0, 2.0);
let point_2 = Point2::new(3.0, 4.0);
let distance = point_1.distance(&point_2);
let equals = point_1.equals(&point_2);
let vector = point_1.get_vector();
let turn = Point2::turn(&point_1, &point_2, &Point2::new(5.0, 6.0));
```

:::note
Two points are equal if the distance between them is less than the `default_eps` of the `NumberType`.
:::

## Operators

`Point2` implements `Add` and `Sub` traits because it has very close relationships with `Vector2`. `Add` or `Sub` two points will return a `Vector2` object.

```rust
let point_1 = Point2::new(1.0, 2.0);
let point_2 = Point2::new(3.0, 4.0);
let vector_add = point_1 + point_2;
let vector_sub = point_1 - point_2;
```

## Others

`Points` implements `Ord` traits, which is useful when you need to sort a list of points or store them in some data structures that require ordering.

1. The `left` point is `Greater`
2. If the `x` coordinates are equal, the `bottom` point is `Greater`
3. If the `x` and `y` coordinates are equal, the two points are equal

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
