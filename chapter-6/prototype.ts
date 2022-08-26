interface Array<T> {
    zip<U>(list: U[]): [T, U][]
}

function tuple<
  T extends unknown[]
>(
    ...ts: T
): T {
    return ts
}

Array.prototype.zip = function<T, U>(
    this: T[],
    list: U[]
): [T, U][] {
    return this.map((v, k) =>
      tuple(v, list[k]))
}