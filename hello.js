const http = require('http')
const server= http.createServer(function(request,response){
    if(request.url==='/'){

        response.end('hello world')
    } else if(request.url === '/saima'){
        response.end('This page belongs to saima')
    } 
    
})

server.listen(3000,function(){
    console.log('server listen at 3000')
})
