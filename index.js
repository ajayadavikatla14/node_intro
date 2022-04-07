const http=require('http');

http.createServer((request,response)=>{
    const user={name:'ajay'}
    // response.write('<h1>first time using the node...</h1>');
    response.write(JSON.stringify(user));
    response.end();
    console.log('running....');
}).listen(8080)