import {readFile,writeFile} from 'node:fs/promises';
for(const name of ['should.js','as-function.js','cjs/should.js','es6/should.js'])await writeFile(name,(await readFile(name,'utf8')).replace(/\r\n/g,'\n'));
