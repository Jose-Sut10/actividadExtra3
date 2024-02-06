const lista_signos = [
    {
        signo: 'Aries',
        fecha_inicio: [21,3],//21 de marzo
        fecha_final: [20,4], //20 de abril
    },
    {
        signo: 'Tauro',
        fecha_inicio: [21,4],//21 de abril
        fecha_final: [20,5] //20 de mayo
    },
    {
        signo: 'Géminis',
        fecha_inicio: [21,5],//21 de mayo
        fecha_final: [20,6] //20 de junio
    },
    {
        signo: 'Cáncer',
        fecha_inicio: [21,6],//21 de junio
        fecha_final: [22,7] //22 de julio
    },
    {
        signo: 'Leo',
        fecha_inicio: [23,7],//23 de julio
        fecha_final: [23,8] //23 de agosto
    },
    {
        signo: 'Virgo',
        fecha_inicio: [24,8],//24 de agosto
        fecha_final: [22,9] //22 de septiembre
    },
    {
        signo: 'Libra',
        fecha_inicio: [23,9],//23 de septiembre
        fecha_final: [23,10] //23 de octubre
    },
    {
        signo: 'Escorpio',
        fecha_inicio: [24,10],//24 de octubre
        fecha_final: [22,11] //22 de noviembre
    },
    {
        signo: 'Sagitario',
        fecha_inicio: [23,11],//23 de noviembre
        fecha_final: [21,12] //21 de diciembre
    },
    {
        signo: 'Capricornio',
        fecha_inicio: [22,12],//21 de diciembre
        fecha_final: [20,1] //20 de enero
    },
    {
        signo: 'Acuario',
        fecha_inicio: [21,1],//21 de enero
        fecha_final: [19,2] //20 de febrero
    },
    {
        signo: 'Piscis',
        fecha_inicio: [20,2],//20 de febrero
        fecha_final: [20,3] //20 de marzo
    }
];


do{
    var diaUsuario = parseInt(prompt("Ingrese el día de nacimiento (1-31):"));
    var mesUsuario = parseInt(prompt("Ingrese el mes de nacimiento (1-12):"));

    const definirSigno = (dia,mes)=>{
        for(const datosSigno of lista_signos){
            const inicioSigno = datosSigno.fecha_inicio;
            const finSigno = datosSigno.fecha_final;

            if( (mes === inicioSigno[1] && dia >= inicioSigno[0]) || (mes === finSigno[1] && dia <= finSigno[0])){
                return datosSigno.signo;
            }
        }

        return alert('Sus datos no coinciden')
    };

    let mensaje = alert(`Si signo zodiacal es ${definirSigno(diaUsuario,mesUsuario)}`);

}while( (diaUsuario > 0 && diaUsuario<=31) && (mesUsuario > 0 && mesUsuario <=12));