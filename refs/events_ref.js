/**
 * добавляет event emitters к приложению
 */
const eventEmitter = require('events');

/**
 * Наследуемся для добавления функционала
 */
class Logger extends eventEmitter {
    
    /**
     * this.emit - наследуемый метод
     * 1 параметр - название события для эмита
     * 2 параметр - данные для передачи 
     */
    log (message) {
        this.emit('message', `${message} ${Date.now()}`);
    };
};

const logger = new Logger();

/**
 * this.emit - наследуемый метод, прослушка события
 * добавляем раньше эмита события
 * 1 параметр - название события для эмита
 * 2 параметр - данные для передачи 
 */
logger.on( 'message', data => console.log(data) );

/**
 * при вызове log() => emit() => on()
 * on() - отлавливает вызов emit
 */
logger.log( 'Hello' );
logger.log( 'Hello' );
logger.log( 'Hello' );