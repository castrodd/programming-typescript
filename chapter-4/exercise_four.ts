interface ArrayConstructor {
    from(arrayLike: any, mapFn?, thisArg?): Array<any>;
}

type TreeNode = {
    value: string
}

type LeafNode = TreeNode & {
    isLeaf: true
}

type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode]
}

function call<T, R>(
    f: (first: T, second: string) => R,
    first: T,
    second: string
): R {
    return f(first, second)
}

function fill(length: any, value: string): string[] {
    return Array.from({length}, () => value)
}

let a = call(fill, 10, 'a')
console.log(a)

// Expected 3 arguments, but got 2.ts(2554)
//let b = call(fill, 10)

// Expected 3 arguments, but got 4.ts(2554)
//let c = call(fill, 10, 'a', 'z')

// error TS2345: Argument of type '20' is not assignable to parameter of type 'string'.
//let d = call(fill, 10, 20)

let e = call(fill, 'a', 'b')