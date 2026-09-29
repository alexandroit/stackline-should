const assert=require('node:assert/strict'),path=require('node:path'),vm=require('node:vm'),fs=require('node:fs');
const root=process.env.STACKLINE_TEST_PACKAGE || path.resolve(__dirname,'..');const should=require(root);
should({a:[1,2]}).deepEqual({a:[1,2]});should(42).be.a.Number().and.equal(42);assert.throws(()=>should(1).equal(2));
const standalone=require(path.join(root,'as-function.js'));standalone('hello').startWith('he');
const context={};vm.runInNewContext(fs.readFileSync(path.join(root,'should.js'),'utf8'),context);context.should({answer:42}).have.property('answer',42);
should(Promise.resolve(42)).fulfilledWith(42).then(()=>console.log('Packed CJS, standalone, browser bundle, promises and assertion failures passed'),e=>{console.error(e);process.exitCode=1;});
