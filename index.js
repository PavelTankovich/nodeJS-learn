const http = require('http');
const fs = require('fs');
const path = require('path');

const { checkResponse } = require('./config-methods');

const server = http.createServer( (req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type' : 'text/html; charset=utf-8'
        });

        checkResponse(req.url, res);

    } else if (req.method === 'POST') {
        const body = [];

        res.writeHead(200, {
            'Content-Type' : 'text/html; charset=utf-8',
        });

        req.on('data', data => {
            body.push(Buffer.from( data ));
        });

        req.on('end', () => {
            const message = body.toString().split('=')[1];
            
            res.end(`
                <h1>Your message/Ваше сообщение</h1>
                <p>${message}</p>
            `, 'utf-8');
        });
    }
});

server.listen(8000, () => {
    console.log('Server started');
});