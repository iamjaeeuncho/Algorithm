function solution(num_list) {
    let lastOne = num_list.at(-1);
    let lastTwo = num_list.at(-2);
    
    // console.log(lastOne, lastTwo)
    num_list.push(lastOne > lastTwo ? lastOne - lastTwo : lastOne * 2)
    
    return num_list
}