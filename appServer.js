
let http = require('http');
let fs = require('fs');
let path = require('path');

http.createServer(function (req,res){

    console.log('Petición recibida:', req.url);
    let ruta;
    
    if(req.url === '/'){
        ruta = './Paginas/index.html';
    }else {
        ruta = '.' + req.url;
    }

    let extensiones = path.extname(ruta);
    console.log('la ruta es: ', ruta);
    console.log('la extencion es: ', extensiones);

    let tipoExt = 'text/plain'
    if(extensiones === '.html'){
        tipoExt = 'text/html';
    }else if(extensiones === '.css'){
        tipoExt = 'text/css';
    }else if(extensiones === '.js'){
        tipoExt = 'text/javascript';
    }

    fs.readFile(ruta, function(err, data){
        if(err){
            res.writeHead(404 , {'content-type': 'text/plain'});
            res.end('Pagina no encontrada');
            return;
        }
        res.writeHead(200, {'content-type': tipoExt});
        res.end(data);
    });

/*
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
    }else if(req.url ==='/assets/css/css.css'){
        fs.readFile('./assets/css/css.css', function(err, data){
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
    */
}).listen(3000, () =>{
    console.log("conexion extablecida");
});