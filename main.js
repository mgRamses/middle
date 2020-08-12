let table = document.querySelector('#tbody');
let boton = document.querySelector('.play');
let it = 0; // Contador de iteraciones

boton.addEventListener('click', function(){
    let superior = parseInt(document.querySelector('#superior').value, 10);
    let inferior = parseInt(document.querySelector('#inferior').value, 10);
    let objetivo = parseFloat(document.querySelector('#objetivo').value);
    let error = parseFloat(document.querySelector('#error').value);

    table.innerHTML = '';
    let it = 0;

    if(superior <= inferior){
        alert('El límite superior debe ser menor al límite inferior');
        document.querySelector('#superior').value = '';
        document.querySelector('#inferior').value = '';
    }else if((objetivo > superior) || (objetivo < inferior)){
        alert('El valor objetivo debe estar entre el límite superior e inferior');
        document.querySelector('#objetivo').value = '';
    }else{
        puntoMedio(superior, inferior, objetivo, error, it);
    }
})

const puntoMedio = (superior, inferior, objetivo, error, it=0) => {
    let sup = superior;
    let inf = inferior;
    let probable = (superior + inferior) / 2;
    let newRow;

    it++;

    // Crea una nueva fila con los datos de la nueva iteración
    newRow = `<tr>
            <td>${it}</td>
            <td>${sup}</td>
            <td>${inf}</td>
            <td>${probable}</td>
        </tr>`;

    if(((probable - error) < objetivo) && (objetivo < (probable + error))){
        table.innerHTML += newRow;
        return 0;
    }else{
        if((superior - objetivo) > (objetivo - inferior)){
            sup = probable;
        }else{
            inf = probable;
        }
        table.innerHTML += newRow;

        puntoMedio(sup, inf, objetivo, error); 
    }
}