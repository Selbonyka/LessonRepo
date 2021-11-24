console.log("Write each number you want to sum up on a new line")


function registering_input(){
    let input_local = []
    while (true){
        const inp = require("Write each number you want to sum up on a new line");
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        if (inp === ""){
            break}
        input_local.append(int(inp))}
    return input_local}

function sum(args){
    let summed = 0
    for (const x of args){
        summed = summed + x}
    return summed;}


let input_list = registering_input()
console.log(sum(input_list))
