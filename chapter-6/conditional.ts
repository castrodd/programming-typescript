// Conditional types
type IsString<T> = T extends string
  ? true
  : false

type A = IsString<string>  // true
type B = IsString<number>  // false

// Distributive conditionals
type ToArray<T> = T[]
type ANumberArray = ToArray<number>  // number[]
type ANumberOrStringArray = ToArray<number | string>  // (string | number)[]

type ToArray2<T> = T extends unknown ? T[] : T[]
type AnotherNumberArray = ToArray2<number>  // number[]
type AnotherNumOrStringArray = ToArray2<number | string> // number[] | string[]


type Without<T, U> = T extends U ? never : T

type WithoutA = Without<
  boolean | number | string,
  boolean
>  // string | number