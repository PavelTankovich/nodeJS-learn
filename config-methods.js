const fs = require('fs');
const path = require('path');

const PATH_VIEW = './views';

const getPage = (lastPath, res) => fs.readFile( 
    path.join(__dirname, PATH_VIEW, lastPath),
    'utf-8',
    (err, content) => {
        if (err) throw new Error(err);

        res.end(content)
    }
);

const getUsers = async (res) => {
    res.writeHead(200, {
            'Content-Type': 'text/json'
        }
    );

    const users = await new Promise( resolve => {
        setTimeout(() => {
            const users = [
                {name: 'Pavel', age: 24},
                {name: 'Anna', age: 31},
            ];

            resolve(users);
        }, 2000);
    });


    res.end( JSON.stringify(users) )
}



const checkResponse = (url, res) => {
    switch (url) {
        case '/' :
            getPage('/index.html', res);
            break;

        case '/about' :
            getPage('/about.html', res);
            break;

        case '/api/users' :
            getUsers(res);
            break;


        default :
            getPage('/404.html', res);
    }
}

module.exports = {
    getPage,
    checkResponse
}