/**
 * позволяет создавать HTTP сервера
 * создание и настройка для того чтобы сервер работал
 */
const http = require('http');

/**
 * @description создает сервер
 * 1 параметр - функция(handler) которая будет выполнена при 
 * определенных запросах на сервер, пр. по заходу на наш url
 * * req - запрос на сервер
 * * res - ответ сервера
 */
const server = http.createServer((req, res) => {
    /** выводит url Запроса, пр. /about */
    console.log(req.url);

    if (req.method === 'GET') {
        /**
         * Headers ответа
         * 1 параметр - статус
         * 2 параметр - объект хедеров
         */
        res.writeHead(200, {
            'Content-Type' : 'text/html'
        });
        /** отдаёт данные */
        res.write('<h1>Hello from NodeJS</h1>');

        /** ВАЖНО, Закрытие запроса (можно также передавать данные) */
        res.end(`
        <form method="POST" action="/">
            <input name="title" type="text" />
            <button type="submit">Send</button>
        </form>
        `);

    } else if (req.method === 'POST') {
        const body = [];
        /**
         * Headers ответа
         * 1 параметр - статус
         * 2 параметр - объект хедеров
         */
        res.writeHead(200, {
            /**charset=utf-8 - кодировка для кирилицы */
            'Content-Type' : 'text/html; charset=utf-8',
        });

        /**
         * req является наследником event emitter 
         * вызываем прослушку события data
         * req.on('data', callback) - мб вызвано несколько
         */
        req.on('data', data => {

            /**
             * передаем данные Buffer в массив body
             */
            body.push(Buffer.from(data));
        })

        /**
         * после всех передач данных
         * вызываем req.on('end', callback)
         * и формируем строку из формы
         */
        req.on('end', data => {
            /**преобразуем массив с Buffer в строку */
            const message = body.toString().split('=')[1];

            /** ВАЖНО, Закрытие запроса (можно также передавать данные) */
            res.end(`
                <h1>Your message/Ваше сообщение</h1>
                <p>${message}</p>
            `);
        });
    }
});

/**
 * @description запуск сервера
 * 1 параметр - порт для работы
 * 2 параметр - функция(callback) запускающаяся по срабатыванию сервера
 */
server.listen(3000, () => {
    console.log('Server started');
});