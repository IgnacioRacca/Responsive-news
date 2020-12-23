// //ejemplo NODE
// const http = require('http');

// const server = http.createServer((request, response) => {
//     response.status = 200;
//     response.setHeader('Content-Type','text/plain');
//     response.end('hello world');
// });

// server.listen(3000, () => {
//     console.log('escuchando puerto 3000 en el servidor');
// });

//ejemplo express
// const express = require('express');

// const app = express();

// app.use(express.json()); //expreee ahora entiende los tipos de dato json



// app.get('/user', (request, response) => {
//     response.json({
//         nombre: 'a la grande le puse cuca',
//         apellido: 'minguita'
//     });
// });

// app.post('/user', (request, response) => {
//     console.log(request.body); //request.boday recibe los datos que me envia en frontend
//     response.send('post recibido');
// });

// app.listen(3000, () => {
//     console.log('server on port 3000');
// });

//rutas dinamicas
const express = require('express');

const app = express();

app.use(express.json()); //expreee ahora entiende los tipos de dato json



app.get('/user', (request, response) => {
    response.json({
        nombre: 'a la grande le puse cuca',
        apellido: 'minguita'
    });
});

app.post('/user/:id', (request, response) => { // /:id asocio el id dinamicamente
    console.log(request.body); //request.boday recibe los datos que me envia en frontend
    console.log(request.params); //me va a mostrar el campo id
    response.send('post recibido');
});

app.listen(3000, () => {
    console.log('server on port 3000');
});