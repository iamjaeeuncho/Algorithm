const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    result = ''
    strings = input[0].split('');
    
    for (let str in strings) {
        if (strings[str] === strings[str].toUpperCase()) {
            result += strings[str].toLowerCase()
        } else {
            result += strings[str].toUpperCase()
        }
    }
    console.log(result)
});