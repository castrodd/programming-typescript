// Function in book --- incorrect
function fancyDate() {
    return `${this.getDate()}/${this.getMonth}/${this.getFullYear()}`
}

// What the function should be
function correctDate() {
    return `${this.getMonth()}/${this.getDate()}/${this.getFullYear()}`
}

console.log(fancyDate.call(new Date))
console.log(correctDate.call(new Date))

// TypeError: this.getDate is not a function
//console.log(fancyDate())