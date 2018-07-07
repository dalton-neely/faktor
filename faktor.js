const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', input => {
    const str = input.split(' ')
    const target = parseInt(str[1],10) - 1
    const articles = parseInt(str[0],10)
    current = 0.0
    bribed = 0
    while(current <= target){
        bribed++
        current = bribed / articles
    }
    console.log(bribed)
    rl.close()
})