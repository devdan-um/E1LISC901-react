import {Alert, AlertTitle, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography} from "@mui/material";
import {Save} from "@mui/icons-material";

import './NewProduct.css'
import SideNav from "./SideNav.jsx";
import {useEffect, useState} from "react";

function NewProduct(){

    const producto = {
        name: "desarmador",
        sku: "DES123",
        cantidad: 2
    };

    const [response, setResponse] = useState(null);
    const [saved, setSaved] = useState(false);
    const [notificacion, setNotificacion] = useState({message:""});

    useEffect(() => {

    }), [saved];

    function fetchApiStore(form) {
        form.preventDefault()
        //console.log('dentro');
        console.log(form);
        console.log(form.target.elements.producto.value)

        const request = {
            name: form.target.elements.producto.value,
            sku: form.target.elements.sku.value,
            cantidad: form.target.elements.noStock.value
        };

        fetch('http://localhost:8181/api/products/save/product', {
            method: "POST",
            body: JSON.stringify(request),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => {
            if (response.ok && response.status === 201) {
                console.log(response);
                setSaved(true);
                return response.json();
            } else {
                console.log('error al guardar el registro')
                throw Error(response.statusText)
            }
        })
        .then(json => {
            setResponse(json)
            setNotificacion(json.notificacion)
            setTimeout(() => {
                setSaved(false)
            }, "5000");

        })
        .catch(err => console.log(err))
        }

return(
    <>
        <SideNav/>
        <Typography variant="h5" component="h5">
            Ingresa los datos para registrar un producto
        </Typography>

        <form onSubmit={event => fetchApiStore(event)}>

            <FormGroup className="form-box">
                <TextField required id="producto" name="producto" label="Producto" variant="outlined"/>
                <TextField required id="sku" name="sku" label="SKU"/>
                <TextField required id="no-stock" name="noStock" label="Numero Stock" type="number"/>
                <FormControlLabel
                    control={<Checkbox defaultChecked/>}
                    label="Producto Disponible"
                />

                <Button type="submit" role={undefined} variant="contained" tabIndex={-1} startIcon={<Save/>}>
                    Guardar Producto
                </Button>

                {saved
                    ? <Alert severity={notificacion.level}>
                        <AlertTitle>{notificacion.reason}</AlertTitle>
                        {notificacion.message}
                    </Alert>
                    : <></>
                }

            </FormGroup>

        </form>


    </>
)
}

export default NewProduct;