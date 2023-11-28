function solution(arr) {
    var answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i -1] !== arr[i]) {
            answer.push(arr[i]);
        } else if (arr[i -1] === arr[i]) {
            continue;
        }
        // console.log(arr[i -1] || 0, arr[i])
    }
    return answer;
}