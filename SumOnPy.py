print("Write each number you want to sum up on a new line")


def registering_input():
    input_local = []
    while True:
        inp = input()
        if inp == "":
            break
        input_local.append(int(inp))
    return input_local


def sum(args):
    registering_input()
    summed = 0
    for x in args:
        x = int(x)
        summed = summed + x
    return summed


input_list = registering_input()
print(sum(input_list))
