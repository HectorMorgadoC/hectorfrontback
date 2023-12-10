const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
let transactionArray = [];

app.use(
    express.urlencoded({
        extended : true 
    })
);

app.use(express.json({
    type: "*/*"
}))

app.use(cors());

app.get('/prueba',(request,response) => {
    response.send(JSON.stringify(transactionArray));
})

app.post('/prueba',(request,response)=>{
    console.log(request.body);
    transactionArray.push(request.body);
    
})

app.listen(port,() => {
    console.log('aplicacion corriendo por el puerto 3000');
});

