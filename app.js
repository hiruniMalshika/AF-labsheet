//const fs = require('fs');
/*fs.readFile('test.txt',(err, data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data.toString());
})*/
/*const readStream = fs.createReadStream('test.txt');
const writeStream = fs.createWriteStream('test-copy.txt');

readStream.addListener('end',()=>{
    console.log('End of file read');
})
writeStream.addListener('close', ()=>{
    console.log('End of file write');
    console.log(fs.readFileSync('test-copy.txt', 'utf-8'));
})
readStream.pipe(writeStream);*/
const http = require('http');

http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(3000, err=>{
    if(err){
        console.error(err);
        return;
    }
    console.log('Server is listening on port 3000');
});
