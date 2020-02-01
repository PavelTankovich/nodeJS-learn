/**
 * работа с косолью
 * node console.js message=Hello spec
 * получаем { message: 'Hello', spec: true }
 */ 

function consoleToJSON () {
    const _console = {};

    for (let i = 2; i < process.argv.length; i++) {
        const arg = process.argv[i].split('=');
        
        _console[ arg[0] ] = arg[1] || true;
    }

    return _console;
}

console.log(consoleToJSON());