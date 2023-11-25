function solution(num_list) {
    let multiply = 1;
    let sum = 0;
    
    for (num of num_list) {
        multiply *= num;
        sum += num;
    }
    
    if (multiply < sum ** 2) {
         return 1
    } else {
         return 0
    }
}