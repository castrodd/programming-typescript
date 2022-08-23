// Companion object pattern
type Currency = {
    unit: 'USD' | 'EUR' | 'CNY' | 'JPY',
    value: number
}

let Currency = {
    DEFAULT: 'USD',
    from(value: number, unit = Currency.DEFAULT): Currency {
        return {unit, value}
    }
}

// Currency as type
let amountDue: Currency = {
    unit: 'JPY',
    value: 88888.88
}

// Currency as value
let otherAmountDue = Currency.from(330, 'EUR')