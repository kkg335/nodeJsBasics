/* 
Libuv - 
   A tool that enforces an asynchronous, event-driven style of programming.
   Its core job is to provide an event loop.
Event-Loop - 
    what allows Node.js to perform non-blocking I/O operations despite the fact that javascript is single threaded by
    offloading operations to the system kernel whenever possible.
*/

const {pbkdf2} = require('crypto');
const {createServer} = require('http');

const start = Date.now();

const hash = () => pbkdf2('myPass','verySecretString',10000,1000, 'sha256', () => {
    console.log('done', Date.now()-start)
})
const lis = () => {
    createServer().listen(3000, () => { 
        console.log("listening", Date.now()-start)
    })
}
hash();
hash();
hash();
hash();
hash();
lis();

