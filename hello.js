const http = require('http')
const server= http.createServer(function(request,response){
    if(request.url==='/'){
        response.end('My Home page')
    }
    else if(request.url === '/products'){
        response.end('All products visible')
    }
}
)
server.listen(3000,function(){
    console.log('server listen at 3000')
})
