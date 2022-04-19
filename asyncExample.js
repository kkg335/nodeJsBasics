const {pbkdf2} = require('crypto');

const start = Date.now();

pbkdf2('password','mySecret', 10000, 1000, 'sha256',(x, y)=> {
    console.log('done', Date.now()-start)
})

console.log('i would be called first', Date.now()-start)

