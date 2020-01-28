const fs = require('fs');
const path = require('path');

/**
 * метод создания папки
 * 1 параметр - путь
 * 2 параметр - callback по завершению
 */
fs.mkdir(path.join(__dirname, '../fs-test-folder'), err => {
    if (err) throw new Error(err);

    console.log('Folder was made');
});

/**
 * метод создания файла
 * 1 параметр - путь
 * 2 параметр - данные для записи в файл
 * 3 параметр - callback по завершению
 */
fs.writeFile(
    path.join(__dirname, '../fs-test-folder', 'fs-test-file.txt'),
    'Hello World',
    err => {
        if (err) throw new Error(err);

        console.log('File was made');
    }
);

/**
 * метод добавления данных в файл
 * 1 параметр - путь
 * 2 параметр - данные для записи в файл
 * 3 параметр - callback по завершению
 */
fs.appendFile(
    path.join(__dirname, '../fs-test-folder', 'fs-test-file.txt'),
    'Added content to the end',
    err => {
        if (err) throw new Error(err);

        console.log('Content was append');
    }
);

/**
 * метод чтения данных из файла
 * 1 параметр - путь
 * 2 параметр - кодировка для считывания (если не указать формат получим типа - 
 * <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 41 64 64 65 64 20 ...>)
 * 3 параметр - callback по завершению (2 параметр коллбэка это данные из файла)
 */
fs.readFile(
    path.join(__dirname, '../fs-test-folder', 'fs-test-file.txt'),
    'utf-8',
    (err, data) => {
        if (err) throw new Error(err);

        console.log(data);
    }
);

/**
 * метод изменения названия файла/папки
 * 1 параметр - путь
 * 2 параметр - путь с переименованым файлом/папкой
 * 3 параметр - callback по завершению 
 */
fs.rename(
    path.join(__dirname, '../fs-test-folder', 'fs-test-file.txt'),
    path.join(__dirname, '../fs-test-folder', 'fs-test-rename-file.txt'),
    err => {
        if (err) throw new Error(err);

        console.log('File/folder was renamed');
    }
);