function solution(str1, str2) {
    var answer = '';
    
    
    for ( str in str1 ) {
        answer += str1[str]+str2[str]
    }
    return answer;
}