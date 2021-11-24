#include <iostream>

int main() {
    printf("The Sum is:\n");
    int arr[10] = {1, 2, 3};
    auto len = sizeof(arr) / sizeof(int);
    int total = 0;
    for (int i = 0; i < len; i++) {
        total = total + arr[i];
    }

    std::cout << total << std::endl;
}
