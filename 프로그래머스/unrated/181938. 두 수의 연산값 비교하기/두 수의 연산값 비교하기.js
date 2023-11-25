function solution(a, b) {
    
    
    let answer1 = a.toString() + b.toString();
    let answer2 = 2 * a * b
    
    let answer = Math.max(answer1, answer2);
    
    return answer;
}