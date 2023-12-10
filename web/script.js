let formData = document.getElementById('saveTransaction');
let buttonList = document.getElementById('listM');
let body = document.getElementById('body');
let register = [];
let number = 0;

function registros(element){
    element.map(e => {
        register.push(e)
    })
    for(let i = 0; i< register.length;i++){
        let casilla = document.createElement('div')
        let lineaUno = document.createElement('li');
        let lineaDos = document.createElement('li');
        lineaUno.classList.add('container');
        lineaDos.classList.add('container');
        lineaUno.innerText = register[i].transactionDescription;
        lineaDos.innerText = register[i].transactionPrice;
        casilla.appendChild(lineaUno);
        casilla.appendChild(lineaDos);
        body.appendChild(casilla);

    }
}


formData.addEventListener('submit',(event)=>{
    event.preventDefault();
    let transactionDescription = document.getElementById('transactionDescription').value;
    let transactionPrice = document.getElementById('transactionPrice').value;
    let transaction = {
        transactionDescription : transactionDescription,
        transactionPrice : transactionPrice
    };

    let transactionJSON = JSON.stringify( transaction );

    fetch('http://localhost:3000/prueba', {
        method : 'Post',
        body : transactionJSON
    })
});


buttonList.addEventListener('click',()=>{
    
    fetch('http://localhost:3000/prueba').then(x => 
    x.json()
        ).then( y => registros(y))
})




