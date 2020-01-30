const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type' : 'text/html'
        });

        res.end(`
        <h1>Hello from NodeJS</h1>
        <form method="POST" action="/">
            <input name="title" type="text" />
            <button type="submit">Send</button>
        </form>
        `);

    } else if (req.method === 'POST') {
        const body = [];

        res.writeHead(200, {
            'Content-Type' : 'text/html; charset=utf-8',
        });

        req.on('data', data => {
            body.push(Buffer.from( ));
        });

        req.on('end', () => {
            const message = body.toString().split('=')[1];

            res.end(`
                <h1>Your message/Ваше сообщение</h1>
                <p>${message}</p>
            `);
        });
    }
});

server.listen(8000, () => {
    console.log('Server started');
});