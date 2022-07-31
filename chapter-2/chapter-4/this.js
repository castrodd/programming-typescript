// Function in book --- incorrect
function fancyDate() {
    return `${this.getDate()}/${this.getMonth}/${this.getFullYear()}`
}

// What the function should be
function correctDate() {
    return `${this.getMonth()}/${this.getDate()}/${this.getFullYear()}`
}

// TypeError: this.getDate is not a function
//console.log(fancyDate())

// 27/function getMonth() { [native code] }/2022
console.log(fancyDate.call(new Date))

// 6/27/2022
console.log(correctDate.call(new Date))
