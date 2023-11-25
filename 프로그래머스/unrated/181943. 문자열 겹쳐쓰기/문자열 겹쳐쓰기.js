function solution(my_string, overwrite_string, s) {
    var answer = '';

    num = my_string.length - (s + overwrite_string.length)
    
    if (num === 0) {
        answer = my_string.substr(0, s) + overwrite_string;
        return answer;
    } else {
        answer = my_string.substr(0, s) + overwrite_string + my_string.slice(-num);
        return answer;
    }
    
    
}