function solution(num_list) {
    let odd = '';
    let even = '';
    
    for (num in num_list) {
        if (num_list[num] % 2 !== 0) {
            odd += num_list[num].toString();
        } else if (num_list[num] % 2 === 0) {
            even += num_list[num].toString();
        }
    }
    return parseInt(odd) + parseInt(even)
}