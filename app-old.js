const http = require('http');

http.createServer((req,res)=>{
    // res.setHeader('Content-Disposition','attachment; filename=lista.csv')
    // res.writeHead(200,{'Content-Type':'application/csv'});    
    // res.write('id, nombre\n');
    // res.write('1, Eric\n');
    // res.write('2, Pedro\n');
    // res.write('3, Nala\n');

    res.write('Hola mundo')
    res.end()
})
.listen(80)
console.log('escuchando el puerto', 80)