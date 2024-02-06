const generadorNum = ()=>{
    const max = 11;
    const min = 1;

    return Math.floor(Math.random() * (max-min+1) +min);

};


const jugar = ()=>{  
    let cartasUsuario = 2, cartasPc = 2, sumaUsuario = 0, sumaPc = 0;
    let cartaExtra = 'si';
    const valoresUsuario = [], valoresPc = [];

    for(let i = 0; i < 2; i++){
        valoresUsuario.push(generadorNum());
        valoresPc.push(generadorNum());
    }

    for (let valor of valoresUsuario) {
        sumaUsuario += valor;
    }

    alert(`Los valores de sus cartas son ${valoresUsuario}. Dando una suma de ${sumaUsuario}`)

    do{
        cartaExtra = prompt('¿Desea una carta extra? (si/no): ');
        if(cartaExtra == 'si'){
            valoresUsuario.push(generadorNum());
            sumaUsuario += valoresUsuario[valoresUsuario.length - 1]
            alert(`Los valores de sus cartas son ${valoresUsuario}. Dando una suma de ${sumaUsuario}`);
        }else if(cartaExtra == 'no'){
            for (let valorPc of valoresPc) {
                sumaPc += valorPc;
            }
            alert(`El total de la computadora es ${sumaPc}`);
            alert(`El total del usuario es de ${sumaUsuario}`);

            if(sumaUsuario > sumaPc){
                alert('Enhorabuena, ha ganado');
            }else if (sumaUsuario < sumaPc){
                alert('Lastima, ha perdido');
            }else{
                alert('Empate');
            }
        }

        if(sumaUsuario > 21){
            alert(`Lastima, su total es ${sumaUsuario}, suerte para la próxima`);
            cartaExtra = 'no';
        }

    }while(cartaExtra != 'no');


    console.log(valoresUsuario)
    console.log(valoresPc)
};

jugar();