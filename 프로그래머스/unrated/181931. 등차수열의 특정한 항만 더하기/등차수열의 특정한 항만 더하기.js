function solution(a, d, included) {
    let includedList = [];
    let total = 0;
    
    // 등차수열로 전환
    for(let i = 0; i < included.length; i++) {
        includedList.push(a + d * i)
        if (included[i] === true) {
            total += includedList[i]
        }
    }
    return total
}