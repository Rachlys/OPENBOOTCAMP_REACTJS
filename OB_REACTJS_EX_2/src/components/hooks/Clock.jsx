
import React, { useEffect, useState } from 'react';

const miContexto = React.createContext(null)


const Clock = () => {

    const relojInicial = {
        fecha : new Date(),
        edad : 0,
        nombre : 'Martín',
        apellidos : 'San José'
    }

    const [ reloj, setReloj ] = useState(relojInicial)


    function actualizarReloj() {
        setReloj((estadoAnterior) => {
          return {
            fecha: new Date(),
            edad: estadoAnterior.edad + 1,
            nombre: 'Martín',
            apellidos: 'San José'
          };
        });
      }


    useEffect(() => {
        const interval = setInterval(() => {

        actualizarReloj()

        }, 1000);

        return () =>{
            clearInterval(interval)
        } ;
      }, []);


    return (
        <miContexto.Provider value={reloj}>

        <div>
            <h2> Hora Actual : {reloj.fecha.toLocaleTimeString()} </h2>
            <h3> {reloj.nombre} {reloj.apellidos} </h3>
            <h1> Edad : {reloj.edad}</h1>
        </div>

        </miContexto.Provider>
    );
}

export default Clock;
