import './prototype'

let sample = [1,2,3]
  .map(n => n**2)
  .zip(['x', 'y', 'z'])

console.log(sample)