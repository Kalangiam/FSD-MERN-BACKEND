// console.log("hello")
// console.log(global)

// console.log(process.argv[3])

// const [,,num] = process.argv
// const double = (num) => num * 2;
// console.log(double(num))

const [,,n1,n2] = process.argv
const sum =(n1,n2) => n1+n2
console.log(sum(+n1,+n2))