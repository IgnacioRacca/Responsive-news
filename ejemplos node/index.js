// const http = require('http'); //permite trabajar con url

// const server = http.createServer((request, response) =>{ //llamo a crear un nuevo servidor
//     console.log(request.url);

//     response.end('hello');
// });

// server.listen(3000); //escucho al servidor con el puerto 3000

//video 3 request y response
// const http = require('http'); //permite trabajar con url

// const server = http.createServer((request, response) =>{ //llamo a crear un nuevo servidor
//     if(request.url === '/empresa'){
//         return response.end('pagina empresa');
//     }else if(request.url === '/inicio'){
//         return response.end('pagina inicio');
//     }else if(request.url === '/contacto'){
//         return response.end('pagina contacto');
//     }else{
//         response.writeHead(404); //modifico el header
//         response.end('404 not found');
//     }
        

    
// });

// server.listen(3000); //escucho al servidor con el puerto 3000


//video 4 respuesta en formato html
// const http = require('http'); //permite trabajar con url

// const fs = require('fs'); //fs file system permite invocar archivos html

//creo vartiable para llamar al archivo html
// const paginaEmpresa = fs.readFileSync('empresa.html');
// const paginaInicio = fs.readFileSync('index.html');

// const server = http.createServer((request, response) =>{ //llamo a crear un nuevo servidor
//     if(request.url === '/empresa'){
//         return response.end(paginaEmpresa);
//     }else if(request.url === '/'){
//         return response.end(paginaInicio);
//     }else if(request.url === '/contacto'){
//         return response.end('pagina contacto');
//     }else{
//         response.writeHead(404); //modifico el header
//         response.end('404 not found');
//     }
        

    
// });

// server.listen(3000); //escucho al servidor con el puerto 3000

//video 7 framework express
// const express = require('express'); //importo express dsde node_modules

// const app = express(); //instancio express

// app.listen(3000, () =>{ // escucho el puerto 3000 es equivalente a server.listen..... y le paso una funcion callback
//     console.log('aplicacion con express');
// }); 

// //routes  rutas
// app.get('/', (request, response) => {  
//     response.json({         //respuesta en format json es muy bueno para trabajar con APIs
//         nombre: 'ruben',
//         apellido: 'blades'
//     });
// });

// app.get('/empresa', (request, response) => {  
//     response.send({         //permite obtenerla respuesta en json, asi como enviar plantillas, cargar..... permite pasar templates en html
//         material: 'granito',
//         color: 'arena'
//     });
// });

//video 8 enviar html con express
const path = require('path'); // me permite acceder a la ruta donde estan los html

const express = require('express'); //importo express dsde node_modules

const app = express(); //instancio express

app.listen(3000, () =>{ // escucho el puerto 3000 es equivalente a server.listen..... y le paso una funcion callback
    console.log('aplicacion con express');
}); 

//routes  rutas
app.get('/', (request, response) => {  
    console.log(__dirname); //muestra la ruta del directorio
    console.log(path.resolve(__dirname, 'index.html')); //muestra la ruta del archivo
    response.sendFile(path.resolve(__dirname, 'index.html')); //envio html
});

app.get('/empresa', (request, response) => {  
    response.sendFile(path.resolve(__dirname, 'empresa.html')); //envio html
});
