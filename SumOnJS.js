console.log("Write each number you want to sum up on a new line")
let input_list = [1, 2]

function sum(args){
    let summed = 0
    for (const x of args){
        summed = summed + x}
    return summed;}

console.log(sum(input_list))
