const path = require('path');

/**
 * Возвращает последнюю часть пути. 
 * Часто используется для извлечения имени файла из полного пути.
 * рекомендовано использовать path.win32.basename
 */
path.basename(__filename)

/**
 * Аналогичен __dirname
 */
path.dirname(__filename)

/**
 * Возвращает расширение текущего файла (.js)
 */
path.extname(__filename);

/**
 * {
 *  root: 'C:\\',
 *  dir: 'C:\\node-learn\\refs',
 *  base: 'path_ref.js',
 *  ext: '.js',
 *  name: 'path_ref'
 *  }
 */
path.parse(__filename);

/**
 * Конкатенирует необходимый путь
 * пр. C:\node-learn\index.js
 */
path.join(__dirname, '../', 'index.js');

/**
 * Конкатенирует необходимый путь в абсолютный
 */
path.resolve(__dirname, '../', '/index.js');

/**
 * возвращает путь от - до
 * refs\path_ref.js
 */
path.relative( './', __filename);

console.log( path.relative( './', __filename));