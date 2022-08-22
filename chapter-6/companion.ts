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

let amountDue: Currency = {
    unit: 'JPY',
    value: 88888.88
}

let otherAmountDue = Currency.from(330, 'EUR')