const assert=require('node:assert/strict'),path=require('node:path'),vm=require('node:vm'),fs=require('node:fs');
const root=process.env.STACKLINE_TEST_PACKAGE || path.resolve(__dirname,'..');const should=require(root);
should({a:[1,2]}).deepEqual({a:[1,2]});should(42).be.a.Number().and.equal(42);assert.throws(()=>should(1).equal(2));
const standalone=require(path.join(root,'as-function.js'));standalone('hello').startWith('he');
const context={};vm.runInNewContext(fs.readFileSync(path.join(root,'should.js'),'utf8'),context);context.should({answer:42}).have.property('answer',42);
should(Promise.resolve(42)).fulfilledWith(42).then(()=>console.log('Packed CJS, standalone, browser bundle, promises and assertion failures passed'),e=>{console.error(e);process.exitCode=1;});

// Compare ordinary and edge-case names with the exact upstream helper.
const nameOf=should.modules.format.functionName;
for(const value of require('./function-name-cases.json'))assert.equal(nameOf({name:'',toString:()=>value.source}),value.expected,value.source);
assert.equal(nameOf(function named(){}),'named');
// Run the adversarial input in a bounded child; a regression cannot hang CI.
const cpName=require('node:child_process');
cpName.execFileSync(process.execPath,['-e',`const s=require(${JSON.stringify(root)});const input='function'+' '.repeat(400000)+'!';if(s.modules.format.functionName({name:'',toString:()=>input})!=='')throw new Error('unexpected name');`],{timeout:4000,stdio:'inherit'});

for(const api of [standalone,context.should])assert.equal(api.modules.format.functionName({name:'',toString:()=> 'function'+' '.repeat(200000)+'!'}),'');
import(require('node:url').pathToFileURL(path.join(root,'es6/should.js')).href).then(module=>{const api=module.default;assert.equal(api.modules.format.functionName({name:'',toString:()=> 'function'+' '.repeat(200000)+'!'}),'');api(42).equal(42);},error=>{console.error(error);process.exitCode=1;});
