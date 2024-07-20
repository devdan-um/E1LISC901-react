import {Alert, AlertTitle, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography} from "@mui/material";
import {Save} from "@mui/icons-material";

import './NewProduct.css'
import SideNav from "./SideNav.jsx";
import {useEffect, useState} from "react";
import fetchStore from "../hooks/fetchStore.jsx";

function NewProduct(){

    const [response, setResponse] = useState(null);
    const [saved, setSaved] = useState(false);
    const [notificacion, setNotificacion] = useState({message:""});

    useEffect(() => {
        console.log(saved);
        console.log(response);
    }), [saved];

    function fetchApiStore(form) {

        form.preventDefault();

        const request = {
            name: form.target.elements.producto.value,
            sku: form.target.elements.sku.value,
            cantidad: form.target.elements.noStock.value
        };

        const endpoint = 'http://localhost:8181/api/products/save/product';
        fetchStore(request, endpoint, setSaved, setResponse, setNotificacion);

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
                <TextField required id="noStock" name="noStock" label="Numero Stock" type="number"/>
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