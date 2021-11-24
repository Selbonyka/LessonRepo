console.log("The sum of 1 and 2 is:")
let variable_list = [1, 2]

function sum(args){
    let summed = 0
    for (const x of args){
        summed = summed + x}
    return summed;}

console.log(sum(variable_list))
