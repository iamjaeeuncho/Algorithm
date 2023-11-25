function solution(a, b) {
    var answer = 0;
    
    let answer1 = a.toString() + b.toString();
    let answer2 = b.toString() + a.toString();
    
    if (answer1 > answer2) {
        return parseInt(answer1)
    } else {
        return parseInt(answer2)
    }
}