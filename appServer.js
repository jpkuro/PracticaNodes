/*let http = require('http');
let fs = require('fs');

http.createServer(function(req, res){

    console.log('Petición recibida:', req.url);

    if(req.url === '/'){

        fs.readFile('./Paginas/index.html', function(err, data){

            if(err){
                console.log('Error:', err);
                res.writeHead(500, {'content-type':'text/plain'});
                res.end('Error al cargar index.html');
                return;
            }

            res.writeHead(200, {'content-type':'text/html'});
            res.end(data);
        });

    } else if(req.url === '/generic'){

        fs.readFile('./Paginas/generic.html', function(err, data){

            if(err){
                console.log('Error:', err);
                res.writeHead(500, {'content-type':'text/plain'});
                res.end('Error al cargar generic.html');
                return;
            }

            res.writeHead(200, {'content-type':'text/html'});
            res.end(data);
        });

    } else {

        res.writeHead(404, {'content-type':'text/plain'});
        res.end('Página no encontrada');
    }

}).listen(3000, function(){
    console.log('Servidor funcionando en http://localhost:3000');
});*/

let http = require('http');
let fs = require('fs');

http.createServer(function (req,res){

    console.log('Petición recibida:', req.url);

    if(req.url === '/'){
        fs.readFile('./Paginas/index.html', function(err, data){
            res.writeHead(200, {'content-type':'text/html'});
            res.end(data);
        });
        
    }else if(req.url === '/Paginas/generic.html'){
        fs.readFile('./Paginas/generic.html', function(err, data){
            res.writeHead(200, {'content-type':'text/html'});
            res.end(data);
        });
    }else if(req.url ==='/assets/css/css.cs'){
        fs.readFile('/assets/css/css.cs', function(err, data){
            res.writeHead(200,{'content-type':'text/css'});
            res.end(data);
        })
    }else if(req.url ==='/Paginas/sobreMi.html'){
        fs.readFile('./Paginas/sobreMi.html', function(err, data){
            res.writeHead(200 , {'content-type':'text/html'});
            res.end(data);
        })
    }else{
        res.writeHead(404,{"content-type":"text/plain"});
        res.end('Pagina no encontrada');
    }

}).listen(3000);