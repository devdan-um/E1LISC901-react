import { useState } from 'react';

function fetchApiStore()  {

    console.log('dentro');

    const [body, setBody] = useState(null);

    const estudiante = {
        nombre: "Daniel",
        apellido: "Gomez",
        enrolado: true,
        idCurso : 1,
        telefono : 7221231212
    };

    /*fetch('http://localhost:8585/api/univer/estudiante/save', {
        method: "POST",
        body: JSON.stringify(estudiante),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(response => {
            if (response.ok && response.status === 201) {
                console.log('creado de manera correcta');
                console.log(response);
                setBody(response.json())
                return response.json()
            } else {
                console.log('error al guardar el registro')
                throw Error(response.statusText)
            }
        })
        .then(json => {
            console.log(json)
        })
        .catch(err => console.log(err));

    return {body}*/


}

export default fetchApiStore;