let normalTuple = [1, true]  // (number | boolean)[]

function tuple<
  T extends unknown[]
>(
    ...ts: T
): T {
    return ts
}

let typedTuple = tuple(1, true) // [number, boolean]