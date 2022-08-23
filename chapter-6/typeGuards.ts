function isString(a: unknown): boolean {
    return typeof a === 'string'
}

function parseInput(input: string | number) {
    let formattedInput: string
    if (isString(input)) {
        // Property 'toUpperCase' does not exist on type 'string | number'.
        // Property 'toUpperCase' does not exist on type 'number'.
        formattedInput = input.toUpperCase()
    }
}

function isStringTypeGuard(a: unknown): a is string {
    return typeof a === 'string'
}

function parseInputTypeGuard(input: string | number) {
    let formattedInput: string
    if (isStringTypeGuard(input)) {
        formattedInput = input.toUpperCase()
    }
}