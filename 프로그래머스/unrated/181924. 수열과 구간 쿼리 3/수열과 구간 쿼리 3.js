function solution(arr, queries) {
    queries.forEach(([i, j]) => {
        [arr[j], arr[i]] = [arr[i], arr[j]]
    })
    return arr;
}