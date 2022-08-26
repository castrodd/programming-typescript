// Simulating nominal types

type CompanyID = string & { readonly brand: unique symbol }
type OrderID = string & { readonly brand: unique symbol }
type UserId = string & { readonly brand: unique symbol }
type ID = CompanyID | OrderID | UserId

function CompanyID(id: string) {
    return id as CompanyID
}

function OrderID(id: string) {
    return id as OrderID
}

function UserId(id: string) {
    return id as UserId
}

function queryForUser(id: UserId) {
    console.log(id)
}

let companyId = CompanyID('8adhdhd7')
let orderId = OrderID('yets64bd8')
let currUserId = UserId('85jg8548')

queryForUser(currUserId)

// Argument of type 'CompanyID' is not assignable
// to parameter of type 'UserId'.
queryForUser(companyId)

